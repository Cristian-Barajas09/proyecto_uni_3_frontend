import { useLogged } from "@/shared/hooks/useLogged";
import { NavLink } from "react-router-dom";
import './styles.css';
import { useDispatch } from "react-redux";
import { logoutAsync } from "@/modules/auth/features/authSlice";
import { AppDispatch } from "@/shared/store/store";

export function Navbar() {
    const dispatch = useDispatch<AppDispatch>();
    const isLogged = useLogged();

    const handleClickLogout = () => {
        dispatch(logoutAsync());
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                    className={({isActive}) => `${isActive ? 'active': ''}` }
                    to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu"
                    className={({isActive}) => `${isActive ? 'active': ''}` }
                    >Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/events"
                    className={({isActive}) => `${isActive ? 'active': ''}` }
                    >Events</NavLink>
                </li>
                {
                    isLogged ? (
                        <>
                            <li>
                                <NavLink to="/profile"
                                className={({isActive}) => `${isActive ? 'active': ''}` }
                                >Profile</NavLink>
                            </li>
                            <li>
                                <button type="button" onClick={handleClickLogout}>
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <NavLink to="/login"
                            className={({isActive}) => `${isActive ? 'active': ''}` }
                            >Login</NavLink>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}