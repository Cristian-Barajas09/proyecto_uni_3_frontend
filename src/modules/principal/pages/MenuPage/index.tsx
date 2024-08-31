import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPlatesAsync } from "../../features/plates.slice"
import { RootState } from "@/shared/store/store"
import { AppDispatch } from "@/shared/store/store"
import { addItemToCart } from "@/shared/features/cart.slice"
import { CardMenu } from "../../components/card-menu"
import "./index.css"
import { Plate } from "@/modules/api/interfaces/plates.interfaces"

export function MenuPage() {
    const plates = useSelector((state: RootState) => state.plates.plates);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getPlatesAsync())
    }, [dispatch])

    const addToCart = (plate: Plate) => {
        dispatch(addItemToCart(plate))
    }

    return (
        <div>
            <div className="card-menu-container">
                {
                    plates.map(plate => (
                        <CardMenu
                            key={plate.id}
                            title={plate.title}
                            image={plate.image}
                            description={plate.description}
                            price={plate.price}
                            addToCart={() => addToCart(plate)}
                        />
                    ))
                }
            </div>
        </div>
    )
}