import { apiConnection, json } from "@lib/api/api";
import { ENDPOINTS } from "@lib/api/endpoints";
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({request,cookies,redirect}) => {
    const { email, password } = await request.json()
    try {
        const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.AUTH}/`
        
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username:email, password })
        })
        console.log(res)

        if (!res.ok) {
            throw new Error('Error al iniciar sesión')
        }


        const data = await res.json() as { access: string, refresh: string }

        // const user = await apiConnection(ENDPOINTS.USER, cookies.get('token')?.value, 'GET')

        // cookies.set('user', JSON.stringify(user))


        return json({
            data
        }, 200)
    } catch(err) {
        console.log(err)
        return json({
            error: "Error al iniciar sesión"
        }, 400)
    }

}