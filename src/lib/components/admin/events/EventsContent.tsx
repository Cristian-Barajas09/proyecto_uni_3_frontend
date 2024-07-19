import React, { type PropsWithChildren } from 'react'
import { apiConnection } from '@lib/api/api'
import type { IEvent } from '@lib/api/types'
import { useCookies } from 'react-cookie'
import { navigate } from 'astro:transitions/client'
import { $createItem } from '@store/admin'
import { useStore } from '@nanostores/react'
import { CardAdmin } from '../CardAdmin'
import { $events } from '@store/global'
import { RtFor } from '@components/utils/RtFor'


function EventsContent() {
    const [ token ] = useCookies(["token"])
    const events = useStore($events)
    const createItem = useStore($createItem)

    React.useEffect(() => {
        const fetchData = async () => {
            if(events.length > 0) return 

            const response = await fetch('/api/events', {
                headers: {
                    'Authorization': `Bearer ${token.token}`
                },
            })


            const data = await response.json() as IEvent[]
            $events.set(data)
        }

        fetchData()

        return () => {
            console.log("Cleanup")
        }
    },[createItem])

    return (
        <div className='w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4'>
                {
                    events.map(({title,id,image}) => (
                        <CardAdmin
                            title={title}
                            id={id}
                            image={image}
                            type='events'
                            key={id}
                        />
                    ))
                }
        </div>
    )
}


export {
    EventsContent
}