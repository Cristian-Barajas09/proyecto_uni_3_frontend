import { useStore } from "@nanostores/react";
import { $collapsedMenu } from "@store/admin";
import type { PropsWithChildren } from "react";

function LayoutContainer({children}: PropsWithChildren) {

    return (
        <main
            className={`absolute mt-10 p-2 w-full top-20 lg:top-0 lg:left-64 lg:w-[79.5%] flex flex-col justify-center items-center`}>
            {children}
        </main>
    )
}

export{ 
    LayoutContainer
}