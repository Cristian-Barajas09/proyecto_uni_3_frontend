import React from 'react'
import type { ICategory } from '@lib/api/types'
import { $createItem } from '@store/admin'
import { useStore } from '@nanostores/react'



function IngredientsContent() {
    const [categories, setCategories] = React.useState<ICategory[]>([])
    const createItem = useStore($createItem)

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/ingredients')


            const data = await response.json() as ICategory[]
            setCategories(data)
        }

        fetchData()

        return () => {
            console.log("Cleanup")
            setCategories([])
        }
    },[createItem])

    return (
        <div className='w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4'>
            {
                categories.map(({title,id, description}) => (
                    <div className='card lg:w-64 w-full bg-base-100 shadow-xl' key={id}>
                        <div className="card-body">
                            <h2 className="card-title">
                                {title}
                            </h2>
                            <p>{description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export {
    IngredientsContent
}