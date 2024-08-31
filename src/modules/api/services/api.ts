interface Plate {
    id:number;
    title:String;
    descripcion:String;
    image:String;
    price:String;
    categories:[]

}




async function fetchData(endpoint: string): Promise<Plate[]> {
    try {
        const response = await fetch(endpoint)
        if(!response.ok){
            throw new Error(`Error en la solicitud : ${response.statusText}`)
        }
        const data:Plate[] = await response.json();
        return data
    }catch(error){
        console.log('Error al obtener los datos :',error)
        throw error
    }
}


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