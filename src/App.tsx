import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrincipalLayout } from "@modules/principal/layouts/PrincipalLayout";
import { MenuPage,HomePage } from "@modules/principal/pages";
import { LoginPage } from "@modules/auth/pages";
import { AuthRoutes } from "./modules/auth/guards/AuthRoutes";
import { DashBoardLayout } from "./modules/admin/layouts/DashBoardLayout";
import { HomeAdminPage } from '@modules/admin/pages'
import { LoginRequired } from "./modules/auth/guards/LoginRequired";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrincipalLayout/>}>
                    <Route path="/" index element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage/>} />
                    <Route
                        path="/login"
                        element={
                            <AuthRoutes>
                                <LoginPage />
                            </AuthRoutes>
                        }
                    />
                </Route>
                <Route
                    path="/admin"
                    element={
                        <LoginRequired>
                            <DashBoardLayout />
                        </LoginRequired>
                    }
                >
                    <Route index element={<HomeAdminPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}