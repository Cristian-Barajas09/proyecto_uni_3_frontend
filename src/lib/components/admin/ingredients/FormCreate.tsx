import React from 'react'
import { useCookies } from 'react-cookie'
import { $createItem } from '@store/admin'


function FormCreate() {

    const [form, setForm] = React.useState<{
        title: string
        description: string
    }>({
        title: '',
        description: '',
    })

    const [token] = useCookies(['token'])


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/ingredients', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
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
                placeholder="Titulo del ingrediente"
                className="input w-full p-2 border border-gray-300 rounded mb-4"
                value={form.title}
                required
                onChange={(e) => {
                    setForm({
                        ...form,
                        title: e.target.value
                    })
                }}
            />
            <label htmlFor="">Descripción</label>

            <textarea
                placeholder="Descripción del ingrediente"
                className="text-area w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => {
                    setForm({
                        ...form,
                        description: e.target.value
                    })
                }}
                value={form.description}
            />


            <button
                    type="submit"
                    className="btn bg-red-500 text-white p-2 rounded hover:shadow-lg"
                >
                    Crear Ingrediente
            </button>
        </form>
    )
}


export {
    FormCreate
}