import './styles.css';
import { AppDispatch, RootState } from "@/shared/store/store";
import { CartModal } from "../CartModal";
import { NavLink } from "react-router-dom";
import { openModalCart } from "@/shared/features/modal-cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { useLogged } from "@/shared/hooks/useLogged";
import { CartIcon } from '@/shared/icons/CartIcon';
import { UserIcon } from '@/shared/icons/UserIcon';
import { NavUser } from '../NavUser';
import React from 'react';


export function Navbar() {
    const dispatch = useDispatch<AppDispatch>();
    const cartModal = useSelector((state: RootState) => state.cartModal.isOpen);
    const cartQuantity = useSelector((state: RootState) => state.cart.items.reduce((acc, item) => acc + item.quantity, 0));
    const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
    const isLogged = useLogged();


    const handleShowCart = () => {
        dispatch(openModalCart());
    }

    const handleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    }

    return (
        <nav className='navbar'>
            <ul className='navbar-container'>
                <li className='navbar__link'>
                    <NavLink
                        className={({ isActive }) => `${isActive ? 'active' : ''}`}
                        to="/">Home</NavLink>
                </li>
                <li className='navbar__link'>
                    <NavLink to="/menu"
                        className={({ isActive }) => `${isActive ? 'active' : ''}`}
                    >Menu</NavLink>
                </li >
                <li className='navbar__link'>
                    <NavLink to="/events"
                        className={({ isActive }) => `${isActive ? 'active' : ''}`}
                    >Events</NavLink>
                </li >

                {
                    isLogged ? (
                        <>
                            <li className='navbar__link'>
                                <button title='cart icon' type="button" onClick={handleShowCart} className='cart-container cart-button'>
                                    <span className='cart-quantity'>{cartQuantity}</span>
                                    <span>
                                        <CartIcon />
                                    </span>
                                </button>

                                {
                                    cartModal && <CartModal />
                                }
                            </li >
                            <li className='navbar__link navbar__user'>
                                <span onClick={handleUserMenu}>
                                    <UserIcon />
                                </span>
                                {isUserMenuOpen && <NavUser />}
                            </li >
                        </>
                    ) : (
                        <li className='navbar__link'>
                            <NavLink to="/login"
                                className={({ isActive }) => `${isActive ? 'active' : ''}`}
                            >Login</NavLink>
                        </li >
                    )
                }
            </ul>
        </nav>
    )
}