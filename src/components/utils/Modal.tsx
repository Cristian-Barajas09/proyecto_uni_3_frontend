import type { PropsWithChildren } from "react";
interface Props {
    status: boolean
    onClose: () => void
}
function Modal({children,status,onClose}: PropsWithChildren<Props>) {
    return (
        <>
            {
                status && (
                    <div
                    className="z-10 top-0 left-0 fixed bg-[#33333375] text-white w-full h-full"
                    >
                        <div
                        className=" rounded absolute max-sm:w-full max-sm:left-0 text-black p-10 bg-white left-1/3 w-1/3"
                        >
                            <button
                                type="button"
                                onClick={onClose}
                                title="Close modal"
                            >X</button>
                            {children}
                        </div>
                    </div>
                )
            }
        </>
    )
}


export {
    Modal
}