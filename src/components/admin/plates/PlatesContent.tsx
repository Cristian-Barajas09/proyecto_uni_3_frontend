import type { IPlate } from "@lib/api/types"
import React from "react"
import { CardAdmin } from "../CardAdmin"

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
        <div className='w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4'>
            {
                plates.map(({title,id,image}) => (
                    <CardAdmin
                        title={title}
                        id={id}
                        image={image}
                        type='plates'
                    />
                ))
            }
        </div>
    )
}

export {
    PlatesContent
}