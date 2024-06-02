import { json } from "@lib/api/api";
import { ENDPOINTS } from "@lib/api/endpoints";
import type { ICategory, IMenu } from "@lib/api/types";
import type { APIRoute } from "astro";

export const prerender = false;

const getCategory = async (
    categories: string[]
) => {
    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.CATEGORIES}`

    const response = await fetch(url)

    if (!response.ok) {
        return []
    }

    const data = await response.json() as ICategory[]


    return categories.map((category) => {
        const categoryData = data.find((cat) => cat.id === parseInt(category))
        return categoryData?.title || ''
    })
}

const getIngredients = async (
    ingredients: string[]
) => {
    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.INGREDIENTS}`

    const response = await fetch(url)

    if (!response.ok) {
        return []
    }

    const data = await response.json() as ICategory[]

    return ingredients.map((ingredient) => {
        const ingredientData = data.find((ing) => ing.id === parseInt(ingredient))
        return ingredientData?.title || ''
    })
}

export const GET: APIRoute = async ({params,request}) => {

    const id = Number(params.id);

    if (isNaN(id)) {
        return json({error: "Invalid ID"}, 400)
    }

    const response = await fetch(
        `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.PLATES}/${id}`,
    )

    const data = await response.json() as IMenu


    return json({
        ...data,
        categories: await getCategory(data.categories),
        ingredients: await getIngredients(data.ingredients)
    })
}

export const DELETE: APIRoute = async ({params,request}) => {
    
        const id = Number(params.id);
    
        if (isNaN(id)) {
            return json({error: "Invalid ID"}, 400)
        }
    
        const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    
        if (!token) {
            return json({error: "Unauthorized"}, 401)
        }
    
        try {
            const response = await fetch(
                `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.PLATES}/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
        
            return json({message: "Plate deleted"})
        } catch (error) {
            return json({error: "Something went wrong"}, 400)
        }
    }

export const PUT: APIRoute = async ({params,request}) => {
    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.PLATES}/${params.id}/`
        try {
            const body = await request.formData()

            const response = await fetch(`${url}`, {
                method: 'PUT',
                headers: {
                    'Authorization': request.headers.get('Authorization') || '',
                },
                body
            })
            if(!response.ok) {
                throw new Error('Error al actualizar el Plato' + JSON.stringify(await response.json()))
            }

            return json({message: 'Platillo creado'})
        } catch(err) {
            console.log(err);
            return json({error: 'Error al actualizar el Plato'},400)
        }

}