import {type APIRoute} from 'astro'
import { apiConnection, json } from '@lib/api/api'
import { ENDPOINTS } from '@lib/api/endpoints'
import  type {IEvent} from '@lib/api/types.d'

export const prerender = false;

export const GET: APIRoute = async ({request}) => {
    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.EVENTS}`
    try {
        console.log(request.headers);
        const token = request.headers.get('Authorization')
        console.log(token);
        if (!token) {
            return json({error: 'No token provided'}, 401)
        }

        const res = await fetch(url, {
            headers: {
                'Authorization': token
            }
        })
        const data = await res.json() as {data: IEvent[]}
        return json(data)
    } catch(err) {
        return json({error: 'Error al obtener los eventos'})
    }


    
}

export const POST: APIRoute = async ({request}) => {
    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.EVENTS}/`
    console.log(request.headers);
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
            return json({error: 'Error al crear el evento'})
        }
}