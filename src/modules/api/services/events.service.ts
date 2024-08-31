import {  Event } from "../interfaces/events.interfaces";
import { ServiceAuth } from "../interfaces/service.interfaces";
import API_CONTANTS from "@/shared/constants/api.constants";

class EventsService implements ServiceAuth{
    private readonly BASE_URLS =  `${API_CONTANTS.API_URL}/${API_CONTANTS.API_VERSION}`
    private token? : string

    async getEvents() : Promise<Event[]>{
        try{
            const response = await fetch(`${this.BASE_URLS}/events`)

            if(!response.ok){
                throw new Error (`Fallo en la solicitud : ${response.statusText}`)
            }

            const data : Event[] = await response.json();
            return data

        }catch(error){
            console.log(`Error al obtener los datos ${error}`)
            throw error
        }
    }

    setToken(token: string): void {
        this.token = token
    }
}

export default new EventsService()