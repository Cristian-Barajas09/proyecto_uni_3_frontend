import type { PropsWithChildren } from "react";

function ListContainer({children}: PropsWithChildren) {
    return (
        <ul>
            {children}
        </ul>
    )
}


export {
    ListContainer
}