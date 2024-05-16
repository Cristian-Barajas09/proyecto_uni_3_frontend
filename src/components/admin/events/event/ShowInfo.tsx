import type { IEvent } from "@lib/api/types";
import type { PropsWithChildren } from "react";
import { $onEdit } from "@store/admin";
import { useStore } from "@nanostores/react";
import { EditForm } from "./EditForm";
interface Props {
    event: IEvent
}

function ShowInfo({event}: PropsWithChildren<Props>) {
    const edit = useStore($onEdit);

    if(!edit) {
        return (
            <>
                <div className="w-1/2 h-96">
                    <img
                        src={event.image ?? '/404.jpeg'}
                        alt={event.title} className="h-full object-cover"
                    />
                </div>
                <div className="shadow-xl m-2 p-5">
                    <h1>{event.title}</h1>
                    <p>{event.description}</p>
                </div>
            </>
        )
    }


    return <EditForm event={event}/>


   
}

export {
    ShowInfo
}