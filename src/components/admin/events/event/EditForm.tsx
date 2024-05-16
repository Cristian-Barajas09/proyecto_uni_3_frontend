import type { IEvent } from "@lib/api/types"
import { navigate } from "astro:transitions/client"
import type { PropsWithChildren } from "react"
import React from "react"
import { useCookies } from "react-cookie"
interface Props {
    event: IEvent
}

function EditForm({event}: PropsWithChildren<Props>) {
    const [title, setTitle] = React.useState(event.title)
    const [description, setDescription] = React.useState(event.description)
    const [image, setImage] = React.useState(event.image ?? '/404.jpeg')
    const [token] = useCookies(['token'])

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        const reader = new FileReader()
        reader.onloadend = () => {
            setImage(reader.result as string)
        }
        reader.readAsDataURL(file as Blob)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)
        formData.append('id', event.id?.toString() ?? '0')
        formData.append('date', event.date)

        fetch(`/api/events/${event.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token.token}` ?? '',
            },
            body: formData
        }).then(() => {
            navigate('/admin/events')
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <form className="flex gap-20" onSubmit={handleSubmit}>
            <div className="w-1/2">
                <img src={image} alt={title} className="h-full object-cover"/>
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={handleChangeImage}
                />
            </div>
            <div className="flex flex-col gap-5 shadow-xl m-2 p-5 w-1/2">
                <div className="flex flex-col">
                    <label htmlFor="title">Titulo</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        defaultValue={title}
                        onChange={handleChangeTitle}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description">Descripción</label>
                    <textarea
                    name="description"
                    id="description"
                    defaultValue={description}
                    onChange={handleChangeDescription}
                    ></textarea>
                </div>
                <div>
                    <button className="bg-green-500 text-white p-2 rounded" type="submit">
                        Guardar
                    </button>
                </div>
            </div>
            
        </form>
    )
}

export {
    EditForm
}