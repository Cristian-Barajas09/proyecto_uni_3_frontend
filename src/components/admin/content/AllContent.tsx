import { navigate } from "astro:transitions/client"
import type { PropsWithChildren } from "react"


type Data = {
    id: number,
    title: string,
    image: string | null,
}
interface Props {
    data: Data[],
    page: string
}

function AllContent({ data,page }:PropsWithChildren<Props>) {
    return (
        <div
            className="p-4 flex flex-col justify-center items-center "
        >
            <div
                className="grid grid-cols-3 gap-2"
            >
                {
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="p-4 text-center text-lg cursor-pointer hover:shadow-xl transition-all duration-75 rounded-lg"
                            onClick={
                                () => navigate(`${page}/${item.id}`)
                            }>
                            <div className="mb-4 h-80">
                                <img src={item.image ?? '/404.jpeg'} alt="" loading="lazy" className="w-full h-full object-cover"/>
                            </div>
                            <h2>{item.title}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export {
    AllContent
}