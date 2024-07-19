import { apiConnection } from '@lib/api/api'
import type { IEvent } from '@lib/api/types'
import React from 'react'
import { useCookies } from 'react-cookie'
import { $createItem } from '@store/admin'


function FormCreate() {

    const [form, setForm] = React.useState<{
        title: string
        description: string
        date: string
        image: File | null
    }>({
        title: '',
        description: '',
        date: '',
        image: null
    })

    const [token] = useCookies(['token'])


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', form.title)
        formData.append('description', form.description)
        formData.append('date', form.date) // format date in year-month
        formData.append('image', form.image as Blob)
        const res = await fetch('/api/events', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token.token}`
            },
            body: formData
        })

        if(res.ok) {
            $createItem.set(true)
        }

    }



    return (
        <form onSubmit={handleSubmit} method='dialog'>
            <label htmlFor="">Titulo</label>

            <input
                type="text"
                placeholder="Event Title"
                className="input w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => {
                    setForm({
                        ...form,
                        title: e.target.value
                    })
                }}
            />
            <label htmlFor="">Descripción</label>

            <textarea
                placeholder="Event Description"
                className="text-area w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => {
                    setForm({
                        ...form,
                        description: e.target.value
                    })
                }}
            />

            <label htmlFor="form-date">Fecha del evento</label>
            <input
                type="datetime-local"
                id="form-date"
                title="Event Date"
                className="input w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => {
                    const formatDate = new Date(e.target.value).toISOString().split('T')[0]
                    setForm({
                        ...form,
                        date: formatDate
                    })
                }}
            />

            <label htmlFor="">Imagen del evento</label>
            <input
                type="file"
                title="Event Image"
                className="file-input w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => {
                    setForm({
                        ...form,
                        image: e.target.files?.[0] || null
                    })
                }}

            />

            <button
                    type="submit"
                    className="btn bg-red-500 text-white p-2 rounded hover:shadow-lg"
                >
                    Crear evento
            </button>
        </form>
    )
}


export {
    FormCreate
}