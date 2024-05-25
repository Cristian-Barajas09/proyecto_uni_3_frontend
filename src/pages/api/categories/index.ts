import { json } from "@lib/api/api";
import type { APIRoute } from "astro";
import { ENDPOINTS } from "@lib/api/endpoints";
import type { ICategory } from "@lib/api/types";

export const prerender = false

export const GET: APIRoute = async() => {
    try {
        const response = await fetch(`${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.CATEGORIES}`)
        const data = await response.json() as ICategory[]
        return json(data)
    } catch (error) {
        return json({error: "A ocurrido un error"}, 500)
    }

}

export const POST: APIRoute = async({request}) => {
    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.CATEGORIES}/`
    try {
        const body = await request.json()
        const response = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Authorization': request.headers.get('Authorization') || '',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if(!response.ok) {
            throw new Error('Error al crear la Categoria')
        }

        return json({message: 'Categoria creada'})
    } catch(err) {
        console.log(err);
        return json({error: 'Error al crear la categoria'})
    }
}