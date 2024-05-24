import type { PropsWithChildren } from "react";

interface CardMenuProps {
    title: string;
    price: number;
    description: string;
    image: string;
}
function CardMenu({}: PropsWithChildren<CardMenuProps>) {
    return (
        <div className="w-3/4 h-auto mx-auto bg-blue-500 m-1 text-center sm:justify-evenly w-80 md:justify-evenly w-80">
            <img className="h-80 w-auto" src="/public/image_menu/020_cuba_libre.jpg" alt=""/>
            <h2></h2>
            <p>$</p>
            <p></p>
        </div>
    )
}

export {
    CardMenu
}