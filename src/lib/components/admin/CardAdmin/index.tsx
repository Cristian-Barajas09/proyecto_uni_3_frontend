import type { PropsWithChildren } from "react";
import { navigate } from "astro:transitions/client";
interface Props {
    title: string;
    image?: string;
    id?: number;
    type: string;
}


function CardAdmin(
    {
        title,
        image,
        id,
        type
    }:PropsWithChildren<Props>
) {
    return (
        <div className="card lg:w-64 w-full bg-base-100 shadow-xl">
            {
                image && (
                    <figure>
                        <img
                            src={image ?? '/404.jpeg'}
                            alt={title}
                            className='rounded-t-lg w-full h-48 object-cover'
                        />
                    </figure>
                )
            }
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-info" onClick={
                        () => navigate(`/admin/${type}/${id}`)
                    }>
                        Ver mas
                    </button>
                </div>
            </div>
        </div>
    )
}

export {
    CardAdmin
}