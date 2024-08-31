import { AppDispatch, RootState } from "@shared/store/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getEventsAsync } from "../../features/events.slice"

export function EventsPage() {
    const events = useSelector((state: RootState) => state.events.events)

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getEventsAsync())
    },[dispatch])

    return (
        <div>
            <h1>Events</h1>
            {
                events.map((event) => (
                    <div key={event.id}>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                    </div>
                ))
            }
        </div>
    )
}