import {type APIRoute} from 'astro'
import { apiConnection, json } from '@lib/api/api'
import { ENDPOINTS } from '@lib/api/endpoints'
import  type {IEvent} from '@lib/events/types'

export const GET: APIRoute = async () => {
    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.EVENTS}`
    const data = await apiConnection<IEvent>(
        url
    )

    return json(data)
}