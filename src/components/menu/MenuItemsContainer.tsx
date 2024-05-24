import type { PropsWithChildren } from "react";

function MenuItemsContainer({children}: PropsWithChildren) {
    return (
        <div className="grid grid-cols-1 gap-5 p-2 lg:grid-cols-2 xl:grid-cols-3">
            {children}
        </div>
    )
}

export {
    MenuItemsContainer
}