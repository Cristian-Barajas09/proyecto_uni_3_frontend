import { CrossIcon } from "@components/icons/CrossIcon";
import { HamburguerIcon } from "@components/icons/HamburguerIcon";

import React from "react";

function MenuButton() {

    const [isOpenButton, setIsOpenButton] = React.useState(false);

    const handleClick = () => {
        setIsOpenButton(!isOpenButton);
    }

    return (
        <>
            <label
                title="Open the menu"
                className="btn btn-circle swap swap-rotate"
                onClick={handleClick}
            >
                <input type="checkbox" title="Menu" />
                <HamburguerIcon className='swap-off fill-current' />
                <CrossIcon className='swap-on fill-current' />
            </label>
        </>
    );
}

export {
    MenuButton
}
