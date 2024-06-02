import { useCookies } from "react-cookie";

function AuthNavbar() {
    const [token] = useCookies(['token']);

    const handleClick = () => {
        fetch('/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    if (token.token) {
        return (
            <>
                <li>
                    <a href="/admin" 
                        className="btn btn-ghost w-full lg:w-auto lg:mr-4 lg:ml-4 lg:mt-0">
                        PERFIL
                    </a>
                </li>
                <li>
                    <button onClick={handleClick} className="btn btn-ghost w-full lg:w-auto lg:mr-4 lg:ml-4 lg:mt-0">
                        CERRAR SESIÓN
                    </button>
                </li>
            </>
        );
    }

    return (
    <>
        <li >
            <a href="/login" className="btn btn-ghost w-full lg:w-auto ">
                INICIAR SESIÓN
            </a>
        </li>
    </>
    );
}

export {
    AuthNavbar
}