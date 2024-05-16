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
        <div className='mt-5'>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    events.map((event) => (
                        <button
                            type='button'
                            title={event.title}
                            key={event.id}
                            className='border border-gray-200 p-4'
                            onClick={() => navigate(`/admin/events/${event.id}`)}
                        >
                            <img
                                src={event.image}
                                alt=""
                                className='object-cover w-full h-40'
                            />
                            <h2>{event.title}</h2>
                            <p>{event?.description}</p>
                        </button>
                    ))
                }
            </section>
        </div>
    )
}


export {
    EventsContent
}