function ListContainer({children}: {children: React.ReactNode}) {
    return (
        <ul className="w-full ">
            { children }
        </ul>
    )
}

export {
    ListContainer
}