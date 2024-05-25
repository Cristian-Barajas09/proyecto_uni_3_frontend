
import React from "react";
import { FormCreate } from "./FormCreate";
import { $createItem } from "@store/admin";
import { useStore } from "@nanostores/react";
import { CrossIcon } from "@components/icons/CrossIcon";

function CreateCategory() {
    const createItem = useStore($createItem);

    React.useEffect(() => {

        if(createItem) {
            const btnClose = document.getElementById("form-event-create") as HTMLDialogElement
            btnClose.close()
        }

        return () => {
            $createItem.set(false);
        }
    },[createItem])

    const handleClick = () => {
        const btnOpen = document.getElementById("form-event-create") as HTMLDialogElement
        btnOpen.showModal()
    }

    const handleClose = () => {
        const btnClose = document.getElementById("form-event-create") as HTMLDialogElement
        btnClose.close()
    }


    return (
        <>
            <div className="w-full flex justify-end">
                <button
                    type="button"
                    onClick={handleClick}
                    className="bg-red-500 text-white p-2 rounded hover:shadow-lg"
                >
                    Crear categoria
                </button>
            </div>
            <dialog 
                id="form-event-create"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box ">
                    <div className="flex justify-between m-2">
                        <h3 className="font-bold text-lg">Crear Categoria</h3>
                        <button 
                            type="button"
                            className='font-bold'
                            onClick={handleClose}
                        >
                            <CrossIcon />
                        </button>
                    </div>
                    <FormCreate/>
                </div>
            </dialog>
        </>
    );
}


export {
    CreateCategory
}