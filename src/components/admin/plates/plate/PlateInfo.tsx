import { CrossIcon } from "@components/icons/CrossIcon"
import type { IMenu } from "@lib/api/types"
import { navigate } from "astro:transitions/client"
import React from "react"
import { useCookies } from "react-cookie"
import { EditForm } from "./EditForm"

function PlateInfo({ id }: { id: number }) {
    const [plate, setPlate] = React.useState<IMenu>()
    const [token] = useCookies(['token'])
    
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/plates/${id}`)
            const data = await response.json()
            setPlate(data)
        }

        fetchData()
    }, [id])

    const handleClickDelete = async () => {
        await fetch(`/api/plates/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token.token}`
            }
        })
        return navigate("/admin/menu/plates")
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
                plate && (
                    <>
                        <div className="container flex gap-10 mt-5 justify-center ">
                            <div className="w-1/2">
                                <img
                                    src={plate.image}
                                    alt={plate.title}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <h1
                                    className="text-3xl font-bold text-center"
                                >
                                    {plate.title}
                                </h1>
                                <p>{plate.description}</p>
                                <p>{plate.price} $</p>
                                <p>
                                    {plate.categories.map((category) => (
                                        <span key={category}>{category}</span>
                                    ))}
                                </p>
                                <p>
                                    {plate.ingredients.map((ingredient) => (
                                        <span key={ingredient}>{ingredient}</span>
                                    ))}
                                </p>
                                <div className="flex gap-2">
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
                                    <EditForm
                                        title={plate.title}
                                        description={plate.description}
                                        price={plate.price}
                                        categories={plate.categories}
                                        ingredients={plate.ingredients}
                                        id={plate.id}
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
    PlateInfo
}