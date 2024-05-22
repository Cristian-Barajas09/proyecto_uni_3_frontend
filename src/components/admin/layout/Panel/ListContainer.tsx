function ListContainer({children}: {children: React.ReactNode}) {
    return (
        <ul
            className="menu menu-horizontal lg:menu-vertical lg:w-full flex justify-center">
            { children }
        </ul>
    )
}

export {
    ListContainer
}