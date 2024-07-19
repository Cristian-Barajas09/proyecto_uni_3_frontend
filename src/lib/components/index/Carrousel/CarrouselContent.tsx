import type { PropsWithChildren } from "react";
import { navigate } from "astro:transitions/client";
import { formatDate } from "@lib/utils/helpers";


interface Props {
    title: string;
    image: string;
    id?: number;
    date?: string;
    description: string;
}
function CarrouselContent(
    {
        title,
        image,
        description,
        id,
        date
    }:PropsWithChildren<Props>,
) 
{
    return (
    <div id={String(id)} className="carousel-item relative w-full bg-base-200 flex flex-col md:flex-row h-full">
    <img src={image ?? '/404.jpeg'} alt={title} className="md:w-1/2 w-full h-100" />
    <div className= "flex flex-col md:w-1/2 w-full p-4 justify-around bg-black">
        <p className="text-center text-xl text-white">{title}</p>
        <p className="text-lg text-white">{description}</p>
        <div className=" flex justify-between">
        <button className="link link-warning text-lg" onClick={
            () => navigate(`events/${id}`)
        }>
                Ver más...
        </button>
            <p className="text-md text-white">{formatDate(date)}</p>
        </div>
    </div>
    </div>
    
    )
}



export {CarrouselContent}