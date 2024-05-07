import { apiConnection, json } from "@lib/api/api";
import { ENDPOINTS } from "@lib/api/endpoints";
import type { IEvent } from "@lib/api/types.d";
import  {type APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({params}) => {

    const id = Number(params.id);

    if (isNaN(id)) {
        return json({error: "Invalid ID"}, 400)
    }

    const data = await apiConnection<IEvent>(
        `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.EVENTS}/${id}`
    )



    return json(data)
}