import { json } from "@lib/api/api";
import { ENDPOINTS } from "@lib/api/endpoints";
import type { IMenu } from "@lib/api/types";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({params,request}) => {

    const id = Number(params.id);

    if (isNaN(id)) {
        return json({error: "Invalid ID"}, 400)
    }

    const response = await fetch(
        `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.PLATES}/${id}`,
    )

    const data = await response.json() as IMenu


    return json(data)
}