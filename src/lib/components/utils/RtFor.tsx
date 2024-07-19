import React from "react"

interface Props<T> {
    iterable: T[]
    children: (item: T) => JSX.Element
}

export function RtFor<T>({ iterable,children }: Props<T>) {
    return (
        <React.Fragment>
            {
                iterable.map(children)
            }
        </React.Fragment>
    )
}