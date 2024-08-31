import { Navbar } from "@shared/components/Navbar";
import { Outlet } from "react-router-dom";
import './index.css';


export function PrincipalLayout() {
    return (
        <div>
            <header className="header">
                <div>
                    <img src="/logo_footer.png" alt="" />
                </div>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}