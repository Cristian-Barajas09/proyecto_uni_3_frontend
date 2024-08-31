import { Events } from "../interfaces/events.interfaces";
import { ServiceAuth } from "../interfaces/service.interfaces";
import API_CONTANTS from "@/shared/constants/api.constants";

class EventsService implements ServiceAuth{
    private readonly BASE_URLS =  `${API_CONTANTS.API_URL}/${API_CONTANTS.API_VERSION}`
    private token? : string

    async getEvents() : Promise<Events[]>{
        try{
            const response = await fetch(`${this.BASE_URLS}/events`)

            if(!response.ok){
                throw new Error (`Fallo en la solicitud : ${response.statusText}`)
            }

            const data : Events[] = await response.json();
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