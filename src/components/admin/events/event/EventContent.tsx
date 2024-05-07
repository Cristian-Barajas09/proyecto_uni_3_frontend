import { apiConnection } from "@lib/api/api";
import type { IEvent } from "@lib/api/types";
import React, { type  PropsWithChildren } from "react";

interface Props {
    id: number
}

function EventContent({id}: PropsWithChildren<Props>) {

    const [event, setEvent] = React.useState<IEvent>();

    React.useEffect(() => {
        const fetchEvent = async () => {
            const response = await apiConnection(`/api/events/${id}`);
            console.log(response);
            
            setEvent(response.data as IEvent);
        }
        fetchEvent();

        return () => {
            console.log("Cleanup");
            setEvent(undefined);
        }
    }, [id]);

    return (
        <div>
            {
                event ? (
                    <div>
                        <div className=" w-60">
                            <img src={event.image ?? '/404.jpeg'} alt={event.title} className="w-full h-full" />
                        </div>
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
                    </div>
                ) : (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )
            }
        </div>
    );
}

export {
    EventContent
}