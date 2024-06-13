import type { PropsWithChildren } from "react";
import { navigate } from "astro:transitions/client";
interface Props {
    title: string;
    image: string;
    id?: number|unknown;
    date?: string;
    description: string;
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${day}/${month}/${year}`;
  };

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
    <div id={id as string} className="p-2 carousel-item relative w-full bg-base-200 flex flex-col md:flex-row h-full">
    <div className="md:w-1/2 md:h-auto w-full h-full flex justify-center items-center bg-none">
    <img src={image ?? '/404.jpeg'} alt={title} className="h-full max-h-96 w-auto" />
    </div>
    <div className= "flex flex-col md:w-1/2 w-full p-4 justify-around bg-none">
        <p className="text-center uppercase text-6xl text-primary-text font-bold">{title}</p>
        <p className="text-xl text-primary-text p-3">{description}</p>
        <div className=" flex justify-between">
        <button className="link link-warning text-lg" onClick={
            () => navigate(`events/${id}`)
        }>
                Ver más...
        </button>
            <p className="text-xl text-primary-text">{formatDate(date)}</p>
        </div>
    </div>
    </div>
    
    )
}

interface LinkProps {
    id?: number|unknown;
}
function CarrouselLinks(
    {
        id
    }:PropsWithChildren<LinkProps>
) {
    return (
        <a href={`#${id}`} className="btn btn-xs p-2" title="carousel-button">
            <img src="/dot.svg" alt=""  className="w-full h-full"/>
        </a> 
    )
}


export {
    CarrouselContent,
    CarrouselLinks
}