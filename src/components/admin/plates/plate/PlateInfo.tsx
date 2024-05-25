import type { IMenu } from "@lib/api/types"
import React from "react"

function PlateInfo({ id }: { id: number }) {
    const [plate, setPlate] = React.useState<IMenu>()
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/plates/${id}`)
            const data = await response.json()
            setPlate(data)
        }

        fetchData()
    }, [id])

    return (
        <div>
            <img
                src={plate?.image}
                alt={plate?.title}
            />
            <h1>{plate?.title}</h1>
            <p>{plate?.description}</p>
            <p>{plate?.price}</p>

        </div>
    )
}


export {
    PlateInfo
}