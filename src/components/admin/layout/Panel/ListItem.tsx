import { useStore } from "@nanostores/react"
import { $collapsedMenu } from "@store/admin"
import { navigate } from "astro:transitions/client"
import type { PropsWithChildren } from "react"

interface Props {
    url: string
    title: string,
    Icon?: () => JSX.Element
}

function ListItem({url,title,Icon}: PropsWithChildren<Props>) {
    const collapsed = useStore($collapsedMenu);
    return (
        <li
            className="p-2 w-full hover:bg-white hover:text-black duration-500"
        >
            <a href={url} className="flex items-center justify-start gap-2">
                <span className="">
                    {Icon && <Icon />}
                </span>
                <span className="max-sm:hidden">
                    {(!collapsed) && title}
                </span>
            </a>
        </li>
    )
}


export {
    ListItem
}