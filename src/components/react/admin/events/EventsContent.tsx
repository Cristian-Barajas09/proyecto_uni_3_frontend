import React, { useEffect, type PropsWithChildren } from "react"
import type {IEvent} from "@lib/events/types.d"
import { apiConnection } from "@lib/api/api"
import {ENDPOINTS} from '@lib/api/endpoints'
import { Card } from "../Card"


function EventsContent() {
    const [events,setEvents] = React.useState<IEvent[]>([])

    useEffect(() => {
        const getEvents = async() => {
            const data = await apiConnection<IEvent>('/api/' + ENDPOINTS.EVENTS)
            setEvents(data.data as IEvent[])
        }

        getEvents()

        return () => {
            setEvents([])
        }
    },[])

    return (
        <div className="m-0overflow-y-auto grid grid-cols-3" style={{viewTransitionName: "event-image"}}>
            {
                events.map(event => (
                    <a
                        title={event.title}
                        href={`/admin/events/${event.id}`} 
                        key={event.id}
                        className="border border-gray-200 p-4 m-2 h-80"
                    >
                        <Card event={event}/>
                    </a>
                ))
            }
        </div>
    )
}


export {
    EventsContent
}