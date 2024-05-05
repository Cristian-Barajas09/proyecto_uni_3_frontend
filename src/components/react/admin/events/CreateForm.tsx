import React from "react"
import {useStore} from '@nanostores/react'
import { showEventsForm } from "src/store/admin"
import { Modal } from "@components/react/Modal"
import { apiConnection } from "@lib/api/api"
import type { IEvent } from "@lib/events/types"
import { ENDPOINTS } from "@lib/api/endpoints"

function CreateFormEvent({children}: React.PropsWithChildren) {
    const showForm = useStore(showEventsForm)

    const [form, setForm] = React.useState<IEvent>({} as IEvent)

    const handleCreateEvent = (event: React.FormEvent) => {
        event.preventDefault()


        // const res = apiConnection<IEvent,IEvent>(
        //     `/api/${ENDPOINTS.EVENTS}`,
        //     'POST',
        //     {}
        // )

        // console.log(res);
    }

    return (
        <div className="w-full flex justify-end">
            <div>
                <button
                title="Create button"
                type="button"
                className="bg-blue-300 text-white p-2 rounded-lg m-2"
                onClick={() => showEventsForm.set(!showForm)}
                >Crear eventos</button>
            </div>
            <Modal status={showForm} onClose={() => showEventsForm.set(!showForm)}>
                <form onSubmit={handleCreateEvent} encType="multipart/form-data" className="flex flex-col p-4">
                    <label>Titulo</label>
                    <input 
                        type="text" title="Titulo" className="border border-gray-200 p-2 m-2"
                        
                    />
                    <label>Descripción</label>
                    <textarea title="Descripción" className="border border-gray-200 p-2 m-2" />
                    <label>Fecha</label>
                    <input type="date" title="Fecha" className="border border-gray-200 p-2 m-2" />
                    <label>Imagen</label>
                    <input type="file" title="Imagen" className="border border-gray-200 p-2 m-2" />
                </form>
            </Modal>
        </div>
    )
}

export {
    CreateFormEvent
}