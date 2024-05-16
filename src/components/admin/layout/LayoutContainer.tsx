import { useStore } from "@nanostores/react";
import { $collapsedMenu } from "@store/admin";
import type { PropsWithChildren } from "react";

function LayoutContainer({children}: PropsWithChildren) {
    const collapsed = useStore($collapsedMenu)
    const collapsedStyle = collapsed ? "w-[90%]" : "w-[75%]"

    return (
        <main className={`${collapsedStyle} absolute right-0 p-2`}>
            {children}
        </main>
    )
}

export{ 
    LayoutContainer
}