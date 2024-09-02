import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPlatesAsync, setCurrentPage } from "../../features/plates.slice"
import { RootState } from "@/shared/store/store"
import { AppDispatch } from "@/shared/store/store"
import { addItemToCart } from "@/shared/features/cart.slice"
import { CardMenu } from "../../components/card-menu"
import "./index.css"
import { Plate } from "@/modules/api/interfaces/plates.interfaces"
import { Paginator } from "@/shared/components/Paginator"
import { useSearchParams } from "react-router-dom"

export function MenuPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const plates = useSelector((state: RootState) => state.plates.plates);
    const numberOfPages = useSelector((state: RootState) => state.plates.numberOfPage);
    const currentPage = useSelector((state: RootState) => state.plates.currentPage);
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(getPlatesAsync({ currentPage }))
    }, [dispatch, currentPage, searchParams])


    const addToCart = (plate: Plate) => {
        dispatch(addItemToCart({ ...plate }))
    }

    const getCurrentPage = () => {
        const page = searchParams.get('page')

        if (!page) return 1

        return parseInt(page)
    }

    const handleNextPage = () => {
        const result = getCurrentPage()

        const currentPage = result === numberOfPages ? result : result + 1

        console.log("currentPage next: %d", currentPage)

        setSearchParams(params => {
            params.set(
                'page',
                String(currentPage)
            )

            return params
        })

        dispatch(setCurrentPage({ currentPage }))
    }

    const handlePreviousPage = () => {
        const result = getCurrentPage()

        const currentPage = result == 1 ? result : result - 1

        console.log("currentPage previous: %d", currentPage)

        setSearchParams(params => {
            params.set(
                'page',
                String(currentPage)
            )

            return params
        })

        dispatch(setCurrentPage({ currentPage }))
    }
    const handlePage = (page: number) => {
        setSearchParams(params => {
            params.set(
                'page',
                String(page)
            )
            return params
        })

        dispatch(setCurrentPage({ currentPage: page }))
    }

    return (
        <div>
            <section className="card-menu-container">
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
            </section>
            <section className="menu-paginator">
                <Paginator
                    numberOfPages={numberOfPages}
                    currentPage={currentPage}
                    onNextPage={handleNextPage}
                    onPreviousPage={handlePreviousPage}
                    onPage={handlePage}
                />
            </section>
        </div>
    )
}