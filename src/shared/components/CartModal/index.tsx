import { useDispatch, useSelector } from "react-redux"
import { closeModalCart } from "@/shared/features/modal-cart.slice"
import { RootState } from "@/shared/store/store";
import { XIcon } from "@/shared/icons/XIcon";
import './style.css'
import { CartModalItem } from "../CartModalItem";
import React from "react";
import { removeItemToCart } from "@/shared/features/cart.slice";

function CartModal() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const isOpen = useSelector((state: RootState) => state.cartModal.isOpen);
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
            });

            return () => clearTimeout(timer);
        }


    }, [isOpen])

    const handleClose = () => {
        dispatch(closeModalCart())
    }

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    };

    const handleDeleteItem = (id: number) => {
        dispatch(removeItemToCart({ id }));
    }

    return (
        isVisible && (
            <div className={`cart-modal ${isOpen ? 'open' : 'close'}`} onClick={handleOutsideClick} onKeyDown={handleKeyDown}>
                <div className="cart-modal-container">
                    <div className="cart-header">
                        <button title="Close modal" type="button" onClick={handleClose} >
                            <XIcon />
                        </button>
                        <h1>Tus productos</h1>
                    </div>
                    <div className="cart-modal-content">
                        {
                            cartItems.length > 0 ? (
                                cartItems.map(item => (
                                    <CartModalItem
                                        key={item.id}
                                        title={item.title}
                                        price={item.price}
                                        quantity={item.quantity}
                                        deleteItem={() => handleDeleteItem(item.id)}
                                    />
                                ))
                            ) : (
                                <p>No hay productos en el carrito</p>
                            )
                        }
                    </div>
                    <div className="cart-modal-total">
                        <p>Total</p>
                        <p>$ {cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</p>
                    </div>
                    <div className="cart-modal__pay">
                        <button type="button">Pagar</button>
                    </div>
                </div>
            </div>
        )
    )
}

export {
    CartModal
}