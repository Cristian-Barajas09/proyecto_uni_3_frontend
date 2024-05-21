import React, { type PropsWithChildren } from 'react'
import { apiConnection } from '@lib/api/api'
import type { IEvent } from '@lib/api/types'
import { useCookies } from 'react-cookie'
import { navigate } from 'astro:transitions/client'
import { $createItem } from '@store/admin'
import { useStore } from '@nanostores/react'


function EventsContent() {
    const [ token ] = useCookies(["token"])
    const [events, setEvents] = React.useState<IEvent[]>([])
    const createItem = useStore($createItem)

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/events', {
                headers: {
                    'Authorization': `Bearer ${token.token}`
                },
            })

            const { data } = await response.json() as {data:IEvent[]}
            setEvents(data)
        }

        fetchData()

        return () => {
            console.log("Cleanup")
            setEvents([])
        }
    },[createItem])

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4'>
            {
                events.map((event) => (
                    <div className="card w-64 bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={event.image}
                                alt="Shoes"
                                className='rounded-t-lg w-full h-48 object-cover'
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {event.title}
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={
                                    () => navigate(`/admin/events/${event.id}`)
                                }>
                                    Ver mas
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export {
    EventsContent
}