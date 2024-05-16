
import type { IEvent } from "@lib/api/types";
import { navigate } from "astro:transitions/client";
import React, { type  PropsWithChildren } from "react";
import { useCookies } from "react-cookie";
import { ShowInfo } from "./ShowInfo";
import { $onEdit } from "@store/admin";
import { useStore } from "@nanostores/react";

interface Props {
    id: number
}

function EventContent({id}: PropsWithChildren<Props>) {

    const [event, setEvent] = React.useState<IEvent>();
    const [token] = useCookies(["token"]);
    const edit = useStore($onEdit);

    React.useEffect(() => {
        const fetchEvent = async () => {
            const response = await fetch(`/api/events/${id}`,{
                headers: {
                    'Authorization': `Bearer ${token.token}`
                }
            });
            const data = await response.json() as IEvent;
            setEvent(data);
        }
        fetchEvent();

        return () => {
            console.log("Cleanup");
            setEvent(undefined);
            $onEdit.set(false);
        }
    }, [id]);

    const handleClick = () => {
        fetch(`/api/events/${id}`,{
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token.token}` ?? ''
            }
        }).then(() => {
            setEvent(undefined);
            navigate('/admin/events');
        })
        .catch((error) => {
            console.error(error);
        });
    }

    const handleEditClick = () => {
        $onEdit.set(!edit);
    }

    return (
        <div>
            {
                event ? (
                    <div>
                        <div className="flex justify-end gap-5">
                            <div>
                                <button className="bg-red-500 text-white p-2 rounded" onClick={handleClick}>
                                    Delete
                                </button>
                            </div>
                            <div>
                                <button className="bg-yellow-500 text-white p-2 rounded" onClick={handleEditClick}>
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex">
                            <ShowInfo event={event} />
                        </div>
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