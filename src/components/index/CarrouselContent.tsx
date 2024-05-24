import type { PropsWithChildren } from "react";
import { navigate } from "astro:transitions/client";
interface Props {
    title: string;
    image: string;
    id?: number|unknown;
    type: string;
    date?: string;
    description: string;
}


function CarrouselContent(
    {
        title,
        image,
        description,
        id,
        date,
        type
    }:PropsWithChildren<Props>
) {
    return (
    <div id={id as string} className="carousel-item relative w-full bg-base-200">
    <img src={image ?? '/404.jpeg'} alt={title} className="w-2/3" />
    <div className= "flex flex-col w-1/3 p-4 justify-around">
        <p>{title}</p>
        <p>{description}</p>
        <div className=" flex justify-between">
        <button className="btn btn-info" onClick={
                        () => navigate(`/${type}/${id}`)
                    }>
                        Ver más
                    </button>
            <p>{date}</p>
        </div>
    </div>
    </div>
    
    )
}


function CarrouselLinks(
    {
        id
    }:PropsWithChildren<Props>
) {
    return (
        <a href={id as string} className="btn btn-xs">
            <img src="/public/dot.svg" alt="a"/>
        </a> 
    )
}


export {
    CarrouselContent,
    CarrouselLinks
}