import { RootState } from "@/shared/store/store"
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export function LoginRequired({ children }: PropsWithChildren) {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    if(!isAuthenticated) return <Navigate to="/login" />

    return (
        <>
            {children}
        </>
    )
}