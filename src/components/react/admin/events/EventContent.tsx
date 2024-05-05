import type { PropsWithChildren } from "react";
import { useState,useEffect } from "react";

import type { IEvent } from "@lib/events/types";
import { apiConnection } from "@lib/api/api";


interface Props {
    id?: string;
}

function EventContent({id}: PropsWithChildren<Props>) {
    const [event, setEvent] = useState<IEvent>();

    useEffect(() => {
        const getEvent = async () => {
            const response = await apiConnection<IEvent>(`/api/events/${id}`);
            const data = response.data as IEvent;
            setEvent(data);
        }

        getEvent();

        return () => {
            setEvent(undefined);
        }
    }, [id]);

    return (
        <div className="flex justify-between">
            <div className="w-1/2">
                <img src={event?.image} alt="" style={
                    {viewTransitionName: "event-image"}
                }/>
            </div>
            <div className="text-center w-1/2">
                <h2>{event?.title}</h2>
                <p>{event?.description}</p>
                <p>{event?.date}</p>
            </div>
        </div>
    );
}

export {
    EventContent
}