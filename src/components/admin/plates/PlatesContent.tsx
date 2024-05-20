import type { IPlate } from "@lib/api/types"
import { navigate } from "astro:transitions/client"
import React from "react"

function PlatesContent() {

    const [plates, setPlates] = React.useState<IPlate[]>([])

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/plates')

            const { data } = await response.json() as { data: IPlate[] }
            setPlates(data)
        }

        fetchData()

        return () => {
            console.log("Cleanup")
            setPlates([])
        }
    }, [])

    return (
        <div className='mt-5'>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    plates.map((plate) => (
                        <button
                            type='button'
                            title={plate.title}
                            key={plate.id}
                            className='border border-gray-200 p-4'
                            onClick={() => navigate(`/admin/plates/${plate.id}`)}
                        >
                            <img
                                src={plate.image}
                                alt=""
                                className='object-cover w-full h-40'
                            />
                            <h2>{plate.title}</h2>
                            <p>{plate?.description}</p>
                        </button>
                    ))
                }
            </section>
        </div>
    )
}

export {
    PlatesContent
}