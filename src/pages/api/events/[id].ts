import { apiConnection, json } from "@lib/api/api";
import { ENDPOINTS } from "@lib/api/endpoints";
import type { IEvent } from "@lib/api/types.d";
import  {type APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({params,request}) => {

    const id = Number(params.id);


    if (isNaN(id)) {
        return json({error: "Invalid ID"}, 400)
    }

    const response = await fetch(`${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.EVENTS}/${id}`,)

    const data = await response.json() as  IEvent



    return json(data)
}

export const DELETE: APIRoute = async ({params,request}) => {
    const id = Number(params.id);

    if (isNaN(id)) {
        return json({error: "Invalid ID"}, 400)
    }
    try {
        await fetch(
            `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.EVENTS}/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': request.headers.get('Authorization') ?? ''
                }
            }
        )
    } catch (error) {
        return json({error: "Error deleting event"}, 400)
    }

    return json({message: "Event deleted"})
}

export const PUT: APIRoute = async ({params,request}) => {
    const id = Number(params.id);

    if (isNaN(id)) {
        return json({error: "Invalid ID"}, 400)
    }

    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.EVENTS}/${id}/`
    try {
            const body = await request.formData()

            const response = await fetch(`${url}`, {
                method: 'PUT',
                headers: {
                    'Authorization': request.headers.get('Authorization') || '',
                },
                body
            })
            if(!response.ok) {
                throw new Error('Error al crear el evento ' + JSON.stringify(response.json()))
            }

            return json({message: 'Event created'})
        } catch(err) {
            console.log(err);
            return json({error: 'Error al crear el evento'})
        }
}