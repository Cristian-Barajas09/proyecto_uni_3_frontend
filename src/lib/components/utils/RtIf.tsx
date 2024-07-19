
import type React from "react"


interface Props {
    condition: boolean;
    elseComponent: React.ReactNode;
}

export function RtIf(
    {children,condition,elseComponent}: React.PropsWithChildren<Props>
): React.ReactNode {

    if(!condition) return elseComponent

    return children
}