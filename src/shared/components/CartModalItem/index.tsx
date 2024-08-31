import { PropsWithChildren } from "react"
import "./style.css"
import { TrashIcon } from "@/shared/icons/TrashIcon";

interface CartModalItemProps {
    title: string;
    price: number;
    quantity: number;
    deleteItem: () => void;
}

function CartModalItem({title, price,quantity , deleteItem}: PropsWithChildren<CartModalItemProps>) {
    return (
        <div className="cart-item">
            <h3>{title}</h3>
            <p>${price}</p>
            <span>x{quantity}</span>
            <span className="cart-delete">
                <button onClick={deleteItem} type="button" title="Delete product of the cart">
                    <TrashIcon />
                </button>
            </span>
        </div>
    )
}

export {
    CartModalItem
}