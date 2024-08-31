import { useDispatch, useSelector } from "react-redux"
import { getPlatesAsync } from "../../features/plates.slice"
import { RootState } from "@/shared/store/store"
import { useEffect } from "react"
import { AppDispatch } from "@/shared/store/store"
import { CardMenu } from "../../components/card-menu"
import "./index.css"

export function MenuPage() {
    const plates = useSelector((state: RootState) => state.plates.plates)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getPlatesAsync())
    }, [dispatch])

    return (
        <div>
            <div className="card-menu-container">

            {
                plates.map(plate => (
                    
                    <CardMenu
                    title={plate.title}
                    image={plate.image}
                    description={plate.description}
                    price={plate.price}
                    key={plate.id}
                    />
                    
                ))
            }
        </div>
    </div>
    )
}