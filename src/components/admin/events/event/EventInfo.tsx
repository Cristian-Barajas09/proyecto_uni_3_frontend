import type { IEvent } from "@lib/api/types"
import React from "react"

function EventInfo({ id }: { id: number }) {
    const [event, setEvent] = React.useState<IEvent>()
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/events/${id}`)
            const data = await response.json()
            setEvent(data)
        }

        fetchData()
    }, [id])

    return (
        <div>
            <img
                src={event?.image}
                alt={event?.title}
            />
            <h1>{event?.title}</h1>
            <p>{event?.description}</p>

        </div>
    )
}


export {
    EventInfo
}