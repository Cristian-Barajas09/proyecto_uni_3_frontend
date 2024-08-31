import { useDispatch, useSelector } from "react-redux"
import { getPlatesAsync } from "../../features/plates.slice"
import { RootState } from "@/shared/store/store"
import { useEffect } from "react"
import { AppDispatch } from "@/shared/store/store"

export function MenuPage() {
    const plates = useSelector((state: RootState) => state.plates.plates)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getPlatesAsync())
    }, [dispatch])

    return (
        <div>
            <h1>Menu</h1>
            {
                plates.map(plate => (
                    <div key={plate.id}>
                        <h2>{plate.title}</h2>
                        <p>{plate.price}</p>
                    </div>
                ))
            }
        </div>
    )
}