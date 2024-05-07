import type { PropsWithChildren } from "react";
interface Props {
    title: string;
    url: string
}




function ListItem({ title,url }: PropsWithChildren<Props>) {
    return (
        <li className="p-4 m-2 text-lg">
            <a
                className="text-white"
                href={url}
            >
                ♪ {title}
            </a>
        </li>
    )
}



export {
    ListItem
}