import { Plate } from "../interfaces/plates.interfaces";
import { ServiceAuth } from "../interfaces/service.interfaces";
import API_CONTANTS from "@/shared/constants/api.constants";


class PlatesService implements ServiceAuth {

    private readonly BASE_URL = `${API_CONTANTS.API_URL}/${API_CONTANTS.API_VERSION}`
    private token?: string;


    async getAll(): Promise<Plate[]> {
        try {
            const response = await fetch(`${this.BASE_URL}/plates`)

            if(!response.ok){
                throw new Error(`Error en la solicitud : ${response.statusText}`)
            }

            const data: Plate[] = await response.json();

            return data
        }catch(error){
            console.log('Error al obtener los datos :',error)
            throw error
        }
    }

    public getToken(): string | undefined {
        return this.token
    }

    public setToken(token: string): void {
        this.token = token
    }
}




export default new PlatesService();

//Nota probar 

/* lo recibiria como una promesa y ya despues el data que retorno seria adaptarlo
fetchData('endpoint')
    .then(data => {
        const plateList : Plate[] = data;
        console.log(plateList)
    })
    .catch(error => console.error('Algo peto', error))


*/

/* El enpoint de plates devuelve como 

*/