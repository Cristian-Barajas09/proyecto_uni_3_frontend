import { PropsWithChildren } from "react"
import "./cards-menu.css"
import PlusIcon from "@shared/icons/plus-icon.svg"

interface CardProps{
    image:string;
    title:string;
    description:string;
    price: string;

}

function CardMenu({image,title,description,price}: PropsWithChildren<CardProps>){
    return(
        <article className="card-menu">

            <section className="card-menu-left">
                <img src={image} alt={title}/>
            </section>
            <section className="card-menu-right">
                <p className="card-menu-right-title">{title}</p>
                <p className="card-menu-right-description">{description}</p>
            <section className="card-menu-right-bottom">
                <p className="card-menu-right-bottom-price"><span className="price-format">USD</span> {price}</p>
                <button type="button" className="card-menu-right-bottom-btn">
                    <img src={PlusIcon} alt="ver más" />
                </button>
            </section>
        </section>
    </article>
    )
}
export {CardMenu}