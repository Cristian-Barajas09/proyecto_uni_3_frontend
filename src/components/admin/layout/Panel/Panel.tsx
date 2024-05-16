import React from "react"
import { Silverware } from "@components/icons/Silverware"
import { FooterComponent } from "../FooterComponent"
import { ListContainer } from "./ListContainer"
import { ListItem } from "./ListItem"
import { TicketIcon } from "@components/icons/TicketIcon"
import { Settings } from "@components/icons/SettingsIcon"
import { BackIcon } from "@components/icons/BackIcon"
import { HomeIcon } from "@components/icons/HomeIcon"
import { $collapsedMenu } from "@store/admin"
import { useStore } from "@nanostores/react"

const routes = [
    {
        title: "Eventos",
        url: "/admin/events",
        Icon: TicketIcon
    },
    {
        title: "Platillos",
        url: "/admin/plates",
        Icon: Silverware
    },
    {
        title: "Configuración",
        url: "/admin/setup",
        Icon: Settings
    }
]

function Panel() {
    const collapsed = useStore($collapsedMenu)

    const handleCollapse = () => {
        $collapsedMenu.set(!collapsed)
    }

    const collapsedStyle = collapsed ? "w-[5%] max-sm:w-[10%] " : "w-1/4"



    return (
        <aside
            className={`bg-black text-white max-sm:w-[7%]  ${collapsedStyle} h-full fixed`}
        >
            <div className={`flex ${collapsed && 'flex-col-reverse'} max-sm:flex-col-reverse items-center justify-center w-full`}>
                <h1 className="text-5xl text-center m-2">
                    <a href="/admin/">
                        {
                            collapsed ? (
                                <HomeIcon />
                            ) : (
                                <>
                                    <span className="max-sm:hidden">Inicio</span>
                                </>
                            )
                        }
                    </a>
                </h1>
                <button title="contraer" type="button" onClick={handleCollapse}>
                    <BackIcon/>
                </button>
            </div>
            <div className={`${collapsed ? 'w-full': 'p-5'}`}>
                <ListContainer>
                    {
                        routes.map((route) => (
                            <ListItem {...route} key={route.url}/>
                        ))
                    }
                </ListContainer>
            </div>
            <footer className={`absolute bottom-0 flex flex-col justify-center w-full ${collapsed ? 'hidden' : ''}`}>
                <FooterComponent/>
            </footer>
</aside>
    )
}

export {
    Panel
}