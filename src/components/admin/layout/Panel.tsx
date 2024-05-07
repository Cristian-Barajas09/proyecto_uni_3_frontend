import { FooterComponent } from "./FooterComponent"
import { ListContainer } from "./ListContainer"
import { ListItem } from "./ListItem"

const routes = [
    {
        title: "Eventos",
        url: "/admin/events"
    },
    {
        title: "Platillos",
        url: "/admin/plates"
    },
    {
        title: "Configuración",
        url: "/admin/setup"
    }
]
function Panel() {
    return (
        <aside
            className="bg-black text-white w-1/4 h-full fixed"
        >
            <h1 className="text-5xl text-center m-2">
                <a href="/admin/">
                    INICIO
                </a>
            </h1>
            <div className="p-5">
                <ListContainer>
                    {
                        routes.map((route) => (
                            <ListItem {...route} key={route.url}/>
                        ))
                    }
                </ListContainer>
            </div>
            <footer className="absolute bottom-0 flex flex-col justify-center w-full">
                <FooterComponent/>
            </footer>
</aside>
    )
}

export {
    Panel
}