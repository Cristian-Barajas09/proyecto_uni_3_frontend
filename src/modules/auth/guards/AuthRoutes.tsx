import { useLogged } from "@/shared/hooks/useLogged"
import { PropsWithChildren } from "react"

import { Navigate } from "react-router-dom"

export function AuthRoutes({ children }: PropsWithChildren) {
    const isAuthenticated = useLogged()

    if(isAuthenticated) return <Navigate to="/" />

    return (
        <>
            {children}
        </>
    )
}