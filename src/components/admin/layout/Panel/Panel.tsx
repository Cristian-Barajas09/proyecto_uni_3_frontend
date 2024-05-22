import React from "react"
import { Silverware } from "@components/icons/Silverware"
import { ListContainer } from "./ListContainer"
import { ListItem } from "./ListItem"
import { TicketIcon } from "@components/icons/TicketIcon"
import { Settings } from "@components/icons/SettingsIcon"
import { HomeIcon } from "@components/icons/HomeIcon"



const routes = [
    {
        title: "Inicio",
        url: "/admin",
        Icon: HomeIcon
    },
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




    return (
        <div
            className="panel w-full fixed lg:left-0 top-0 lg:h-screen lg:w-64 bg-primary-content z-10">
            <div className="panel-header">
                <div className="p-2">
                    <h3 className="text-white text-center">Panel</h3>
                </div>
            </div>
            <div className="panel-body">
                <ListContainer>
                    {
                        routes.map((route, index) => (
                            <ListItem key={index} {...route} />
                        ))
                    }
                </ListContainer>
            </div>
        </div>
    )
}

export {
    Panel
}