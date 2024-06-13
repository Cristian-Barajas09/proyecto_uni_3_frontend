import React from "react";
import { AuthNavbar } from "./AuthNavbar"
import { MenuButton } from "./MenuButton"
import { ThemeButton } from "./ThemeButton";


const routes = [
    {
        url: "/",
        title: "INICIO",
    },
    {
        url: "/menu",
        title: "MENÚ",
    },
    {
        url: "/events",
        title: "EVENTOS",
    },
]
function Navbar () {
    const [isOpenButton, setIsOpenButton] = React.useState(false);

    React.useEffect( () => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                setIsOpenButton(false);
            }
        })

        return () => {
            window.removeEventListener('resize', () => {
                if (window.innerWidth > 1024) {
                    setIsOpenButton(false);
                }
            })
        }
    },[])

    const handleClick = () => {
        setIsOpenButton(!isOpenButton);
    }

    const showMenu = isOpenButton ?
    'fixed h-screen w-screen left-0 top-0 bg-primary' : 'hidden'

    const showCloseButton = isOpenButton ? 'fixed top-0 right-0 z-10' : ''

    return (
        <>
            <div className={`m-2 lg:hidden ${showCloseButton}`}>
                <MenuButton show={isOpenButton} handleClick={handleClick}/>
            </div>
            <div
                className={`${showMenu} lg:block lg:h-full w-full h-screen`}
                id="navbar-menu">
                <ul className="flex flex-col gap-2 lg:flex-row justify-end m-10 mt-20 lg:m-0 text-primary-text">
                    {
                        routes.map((route) => (
                            <li key={route.url}>
                                <a
                                    href={route.url}
                                    className="btn btn-ghost w-full lg:w-auto"
                                >
                                    { route.title }
                                </a>
                            </li>
                        ))
                    }
                    <AuthNavbar />
                    <ThemeButton />
                </ul>
            </div>
        </>
    )
}

export { Navbar }