import React from 'react'
import { AllContent } from "../content/AllContent"
import { apiConnection } from '@lib/api/api'
import type { IEvent } from '@lib/api/types'

const data = [
    {
        id: 1,
        title: "Event 1",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        title: "Event 2",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        title: "Event 3",
        image: "https://via.placeholder.com/150"
    }
]

function EventsContent() {

    const [events, setEvents] = React.useState<IEvent[]>([])

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await apiConnection<IEvent>(
                "/api/events"
            )
            setEvents(response.data as IEvent[])
        }

        fetchData()

        return () => {
            console.log("Cleanup")
            setEvents([])
        }
    },[])

    return (
        <div>
            <h1>Events</h1>
            <AllContent data={events.map(event => ({ ...event, id: event.id || 0 }))} page="events"/>
        </div>
    )
}


export {
    EventsContent
}