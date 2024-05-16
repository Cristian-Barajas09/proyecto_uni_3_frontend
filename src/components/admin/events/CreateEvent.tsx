import { Modal } from "@components/utils/Modal";
import React from "react";
import { FormCreate } from "./FormCreate";
import { $createItem } from "@store/admin";
import { useStore } from "@nanostores/react";

function CreateEvent() {
    const [showModal, setShowModal] = React.useState(false);
    const createItem = useStore($createItem);

    React.useEffect(() => {

        if(createItem) {
            setShowModal(false);
        }

        return () => {
            setShowModal(false);
            $createItem.set(false);
        }
    },[createItem])

    const handleClick = () => {
        setShowModal(!showModal);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="w-full flex justify-end">
                <button
                    type="button"
                    onClick={handleClick}
                    className="bg-red-500 text-white p-2 rounded hover:shadow-lg"
                >
                    Crear evento
                </button>
            </div>
            <Modal status={showModal} onClose={handleClose}>
                <FormCreate/>
            </Modal>
        </>
    );
}


export {
    CreateEvent
}