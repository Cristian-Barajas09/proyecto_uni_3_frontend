import type { IEvent } from "@lib/events/types"
import type { PropsWithChildren } from "react"

interface Props {
    event: IEvent

}


function Card({event}: PropsWithChildren<Props>) {
    const eventDate = new Date(event.date);

    // Formatear la fecha
    const formattedDate = `${eventDate.getDate()}/${eventDate.getMonth()+1}/${eventDate.getFullYear()}`;

    return (
        <div >
            <div className="h-48">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover object-center"

                />
            </div>
            <div className="p-4">
                <h2>{event.title}</h2>
                <p className="truncate">
                    {event.description}</p>
                {/* <p>Fecha de publicacion: {formattedDate}</p> */}
            </div>
        </div>
    )
}

export {
    Card
}