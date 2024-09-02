import { logoutAsync } from "@/modules/auth/features/authSlice";
import { AppDispatch } from "@/shared/store/store";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import './styles.css'
function NavUser() {
    const dispatch = useDispatch<AppDispatch>();

    const handleClickLogout = () => {
        dispatch(logoutAsync());
    }

    return (
        <ul className="menu-user">
            <li className="nav-user__link">
                <NavLink to="/profile">
                    Profile
                </NavLink>
            </li>
            <li className="nav-user__link">
                <NavLink to="/settings" className="nav-user__link">
                    Settings
                </NavLink>
            </li>

            <li className="nav-user__link">
                <button type="button" onClick={handleClickLogout}>
                    Logout
                </button>
            </li>
        </ul>
    );
}

export  { NavUser };