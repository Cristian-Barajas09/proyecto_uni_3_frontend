import { Outlet } from "react-router-dom";

export function DashBoardLayout() {
    return (
        <>
            <header>
                <h1>Admin</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}