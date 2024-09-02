import { PropsWithChildren } from "react"
import "./cards-menu.css"
import PlusIcon from "@shared/icons/plus-icon.svg"
import API_CONTANTS from "@/shared/constants/api.constants"
interface CardProps{
    image:string;
    title:string;
    description:string;
    price: string;
    addToCart: () => void;
}

function CardMenu({image,title,description,price, addToCart}: PropsWithChildren<CardProps>){
    const imageSrc = `${API_CONTANTS.IMAGE_SERVICE_URL}/images/${image}`

    return (
        <article className="card-menu">

            <section className="card-menu-left">
                <img src={imageSrc} alt={title}/>
            </section>
            <section className="card-menu-right">
                <p className="card-menu-right-title">{title}</p>
                <p className="card-menu-right-description">{description}</p>
            <section className="card-menu-right-bottom">
                <p className="card-menu-right-bottom-price"><span className="price-format">USD</span> {price}</p>
                <button type="button" className="card-menu-right-bottom-btn" onClick={addToCart}>
                    <img src={PlusIcon} alt="ver más" />
                </button>
            </section>
        </section>
    </article>
    )
}
export {CardMenu}