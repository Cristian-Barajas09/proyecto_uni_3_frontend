import { useCookies } from "react-cookie";

export function useLogged(): boolean {
    const [cookies] = useCookies(['token']);
    return !!cookies.token;
}