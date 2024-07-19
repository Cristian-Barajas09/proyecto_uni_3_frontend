
import type { ICategory } from '@lib/api/types'
import React from 'react'
import { useCookies } from 'react-cookie'
import { $createItem } from '@store/admin'


function FormCreate({}) {

    const [form, setForm] = React.useState<{
        title: string
        description: string
        price: number
        image: File | null,
        categories: string[],
        ingredients: string[]
    }>({
        title: '',
        description: '',
        price: 0,
        image: null,
        categories: [],
        ingredients: []
    })

    const [token] = useCookies(['token'])

    const [categories, setCategories] = React.useState<ICategory[]>([])
    const [ingredients, setIngredients] = React.useState<ICategory[]>([])

    React.useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch('/api/categories')
            const data = await res.json() as ICategory[]
            setCategories(data)
        }

        const fetchIngredients = async () => {
            const res = await fetch('/api/ingredients')
            const data = await res.json() as ICategory[]
            setIngredients(data)
        }

        fetchCategories()
        fetchIngredients()

    }, [])


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', form.title)
        formData.append('description', form.description)
        formData.append('price', String(form.price)) // format date in year-month
        formData.append('image', form.image as Blob)

        form.ingredients.forEach((ingredient) => {
            formData.append(`ingredients`, ingredient)
        })
        form.categories.forEach((category) => {
            formData.append(`categories`, category)
        })

        const res = await fetch('/api/plates', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token.token}`,
            },
            body: formData
        })

        if(res.ok) {
            $createItem.set(true)
        }

    }

    const handleChangeIngredientes = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        
            const options = e.target.options
            const ingredients = []
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    ingredients.push(options[i].value)
                }
            }
            setForm({
                ...form,
                ingredients
            })
    }

    const handleChangeCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const options = e.target.options
        const categories = []
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                categories.push(options[i].value)
            }
        }
        setForm({
            ...form,
            categories
        })
    }


    return (
        <form onSubmit={handleSubmit} method='dialog'>
            <div className='flex flex-col gap-4 m-2'>
                <label htmlFor="">Titulo</label>

                <input
                    type="text"
                    placeholder="titulo del platillo"
                    className="input w-full p-2 border border-gray-300 rounded mb-4"
                    onChange={(e) => {
                        setForm({
                            ...form,
                            title: e.target.value
                        })
                    }}
                />
            </div>
            <div className='flex flex-col gap-4 m-2'>
                <label htmlFor="">Descripción</label>

                <textarea
                    placeholder="Descripción del platillo"
                    className="text-area w-full p-2 border border-gray-300 rounded mb-4"
                    onChange={(e) => {
                        setForm({
                            ...form,
                            description: e.target.value
                        })
                    }}
                />
            </div>
            <div className='flex flex-col gap-4 m-2'>
                <label htmlFor="">Precio</label>
                <input
                    type="number"
                    placeholder="Precio del platillo"
                    className="input w-full p-2 border border-gray-300 rounded mb-4"
                    onChange={(e) => {
                        setForm({
                            ...form,
                            price: parseInt(e.target.value)
                        })
                    }}
                />
            </div>

            <div className='flex flex-col gap-4 m-2'>
                <label htmlFor="">Imagen del Platillo</label>
                <input
                    type="file"
                    title="Selecciona una imagen"
                    className="file-input w-full p-2 border border-gray-300 rounded mb-4"
                    onChange={(e) => {
                        setForm({
                            ...form,
                            image: e.target.files?.[0] || null
                        })
                    }}
                />
            </div>

            <div className='flex flex-col gap-4 m-2'>
                <label htmlFor="">Categoría</label>
                <select
                    title='Selecciona una categoría'
                    className="input w-full p-2 border border-gray-300 rounded mb-4"
                    multiple
                    onChange={handleChangeCategories}
                >
                    {
                        categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.title}</option>
                        ))
                    }
                </select>
            </div>
            <div className='flex flex-col gap-4 m-2'>
                <label htmlFor="">Ingredientes</label>
                <select
                    title='Selecciona un ingrediente'
                    className="input w-full p-2 border border-gray-300 rounded mb-4"
                    multiple
                    onChange={handleChangeIngredientes}
                >
                    {
                        ingredients.map((ingredient) => (
                            <option key={ingredient.id} value={ingredient.id}>{ingredient.title}</option>
                        ))
                    }
                </select>
            </div>


            <div className='m-2'>
                <button
                        type="submit"
                        className="btn bg-red-500 text-white p-2 rounded hover:shadow-lg"
                    >
                        Crear plato
                </button>
            </div>
        </form>
    )
}


export {
    FormCreate
}