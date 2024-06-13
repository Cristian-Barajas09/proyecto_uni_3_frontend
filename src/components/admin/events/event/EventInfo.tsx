import type { IEvent } from "@lib/api/types"
import { navigate } from "astro:transitions/client"
import React from "react"
import { useCookies } from "react-cookie"
import { EditEvent } from "./EditEvent"
import { CrossIcon } from "@components/icons/CrossIcon"

function EventInfo({ id }: { id: number }) {
    const [event, setEvent] = React.useState<IEvent>()
    const [token] = useCookies(['token'])
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/events/${id}`)
            const data = await response.json()
            setEvent(data)
        }

        fetchData()
    }, [id])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${day}/${month}/${year}`;
      };

      
    const handleClickDelete = async () => {
        await fetch(`/api/events/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token.token}`
            }
        })
        return navigate("/admin/events")
    }

    const handleClickUpdate = () => {
        const btnOpen = document.getElementById("form-event-create") as HTMLDialogElement
        btnOpen.showModal()
    }

    const handleClose = () => {
        const btnClose = document.getElementById("form-event-create") as HTMLDialogElement
        btnClose.close()
    }

    return (
        <>
        {
            event && (
                <>
                    <div className="container flex gap-10 mt-5 justify-center ">
                        <div className="w-1/2">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center">

                            <h1 className="text-3xl font-bold text-center">
                                {event.title}
                            </h1>
                            <p>{event.description}</p>
                            <p>{formatDate(event.date)}</p>
                            <div  className="flex gap-2">
                                <button
                                    onClick={handleClickUpdate}
                                    type="button"
                                    className="btn btn-primary text-white p-2 rounded hover:shadow-lg"
                                >
                                    Editar
                                </button>
                                <button onClick={handleClickDelete} className="btn btn-error text-white p-2 rounded hover:shadow-lg">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <dialog
                            id="form-event-create"
                            className="modal modal-bottom sm:modal-middle"
                        >
                            <div className="modal-box">
                                <div className="flex justify-between m-2">
                                    <h3 className="font-bold text-lg">Crear Platillo</h3>
                                    <button 
                                        className='font-bold'
                                        onClick={handleClose}
                                    >
                                        <CrossIcon />
                                    </button>
                                </div>
                                <EditEvent
                                    title={event.title}
                                    description={event.description}
                                    date={event.date}
                                    id={event.id}
                                />
                            </div>
                        </dialog>
                    </div>
                </>
            )
        }
    </>
    )
}


export {
    EventInfo
}