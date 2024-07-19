import { CrossIcon } from "@components/icons/CrossIcon";
import { HamburguerIcon } from "@components/icons/HamburguerIcon";

import React from "react";

interface Props {
    handleClick: () => void,
    show: boolean
}


function MenuButton({show,handleClick}: React.PropsWithChildren<Props>) {

    return (
        <>
            <button
                type="button"
                title="Menu"
                onClick={handleClick}
                className="btn btn-circle"
            >
                {
                    show ? (
                        <CrossIcon/>
                    ): (
                        <HamburguerIcon />
                    )
                }
            </button>
        </>
    );
}

export {
    MenuButton
}
