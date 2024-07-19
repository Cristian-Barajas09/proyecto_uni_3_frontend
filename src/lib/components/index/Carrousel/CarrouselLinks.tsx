import type { PropsWithChildren } from "react";

interface LinkProps {
    id?: number|unknown;
}


export function CarrouselLinks(
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
