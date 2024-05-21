import { json } from "@lib/api/api";
import { ENDPOINTS } from "@lib/api/endpoints";
import type { IPlate } from "@lib/api/types";
import type { APIRoute } from "astro";

export const GET: APIRoute = async() => {

    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.PLATES}`

    const response = await fetch(url)

    if (!response.ok) {
        return json({ error: "Failed to fetch data" }, response.status)
    }

    const data = await response.json() as IPlate[]

    return json({
        data: data.map((plate) => ({
            id: plate.id,
            title: plate.title,
            image: plate.image,
            price: Number(plate.price),
            description: plate.description
        }))
    })
}