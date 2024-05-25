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
                <li className="btn btn-ghost">
                    <a href="/admin">
                        PERFIL
                    </a>
                </li>
                <li className="btn btn-ghost">
                    <button onClick={handleClick}>
                        CERRAR SESIÓN
                    </button>
                </li>
            </>
        );
    }

    return (
    <>
        <li className="btn btn-ghost">
            <a href="/login">
                INICIAR SESIÓN
            </a>
        </li>
    </>
    );
}

export {
    AuthNavbar
}