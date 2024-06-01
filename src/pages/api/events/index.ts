import {type APIRoute} from 'astro'
import { json } from '@lib/api/api'
import { ENDPOINTS } from '@lib/api/endpoints'
import  type {IEvent} from '@lib/api/types.d'

export const prerender = false;

export const GET: APIRoute = async ({}) => {
    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.EVENTS}`
    try {

        const res = await fetch(url)
        const data = await res.json() as IEvent[]
        console.log(data)
        return json(data)
    } catch(err) {
        return json({error: 'Error al obtener los eventos'},400)
    }
}

export const POST: APIRoute = async ({request}) => {
    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.EVENTS}/`
        try {
            const body = await request.formData()

            const response = await fetch(`${url}`, {
                method: 'POST',
                headers: {
                    'Authorization': request.headers.get('Authorization') || '',
                },
                body
            })
            if(!response.ok) {
                throw new Error('Error al crear el evento')
            }

            return json({message: 'Event created'})
        } catch(err) {
            console.log(err);
            return json({error: 'Error al crear el evento'},400)
        }
}