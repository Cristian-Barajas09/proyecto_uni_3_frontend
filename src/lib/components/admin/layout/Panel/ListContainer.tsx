function ListContainer({children}: {children: React.ReactNode}) {
    return (
        <ul
            className="menu menu-horizontal lg:menu-vertical lg:w-full flex justify-center gap-4">
            { children }
        </ul>
    )
}

export {
    ListContainer
}