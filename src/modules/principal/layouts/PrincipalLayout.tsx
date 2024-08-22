import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export function PrincipalLayout() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}