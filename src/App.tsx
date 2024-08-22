import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrincipalLayout } from "@modules/principal/layouts/PrincipalLayout";
import { MenuPage,HomePage } from "@modules/principal/pages";
import { LoginPage } from "@modules/auth/pages";


export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrincipalLayout/>}>
                    <Route path="/" index element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage/>} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}