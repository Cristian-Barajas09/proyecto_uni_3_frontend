import type { PropsWithChildren } from "react";

interface CardMenuProps {
    title: string;
    price: number;
    ingredients: string[];
    image?: string;
}
function CardMenu(props: PropsWithChildren<CardMenuProps>) {
    return (
        <div className="card bg-base-100 shadow-2xl lg:shadow-none p-2 lg:p-0">
            <figure>
                <img
                    className="h-80 w-auto object-cover object-center rounded-box lg:rounded-none lg:h-64"
                    src={props.image || '404.jpg'}
                    alt={props.title}
                />
            </figure>
            <div className="card-body">

                <h2 className="card-title">{props.title}</h2>
                <p>{props.price} $</p>
                <p>{props.ingredients.join(', ')}</p>
            </div>
        </div>
    )
}

export {
    CardMenu
}