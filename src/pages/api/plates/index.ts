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
export const GET: APIRoute = async() => {

    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.PLATES}`

    const response = await fetch(url)

    if (!response.ok) {
        return json({ error: "Failed to fetch data" }, response.status)
    }

    const data = await response.json() as IMenu[]


    return Promise.all(data.map(async (plate) => {
        const category = await getCategory(plate.categories);
        const ingredients = await getIngredients(plate.ingredients);
        return {
            id: plate.id,
            title: plate.title,
            image: plate.image,
            price: Number(plate.price),
            description: plate.description,
            categories: category,
            ingredients: ingredients,
        };
    })).then(data => {
        return json({ data: data });
    });
}

export const POST: APIRoute = async({request}) => {
    const url = `${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.PLATES}/`
        try {
            const body = await request.formData()
            console.log(body);

            const response = await fetch(`${url}`, {
                method: 'POST',
                headers: {
                    'Authorization': request.headers.get('Authorization') || '',
                },
                body
            })
            if(!response.ok) {
                throw new Error('Error al crear el Plato')
            }

            return json({message: 'Platillo creado'})
        } catch(err) {
            console.log(err);
            return json({error: 'Error al crear el Plato'},400)
        }
}