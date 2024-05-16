import type { APIResponse } from "./types"
type options ={
    [key: string]: any
}

async function apiConnection<T>(route: string,method: string = "GET",body?: any,initOptions: any = null): Promise<APIResponse<T>> {
    const options: options = {
        method,
    }

    if (body ) {
        if (body instanceof FormData) {
            options.body = body;
        } else {
            options.body = JSON.stringify(body);
            options.headers = {
                'Content-Type': 'application/json'
            }
        }
    }

    if(initOptions) {
        Object.assign(options, initOptions)
    }

    console.log(options)
    const response = await fetch(
        route,
        options
    )

    if (!response.ok) {
        throw new Error("Error al realizar la petición")
    }

    const data = await response.json() as Promise<APIResponse<T>>
    return data
}



function json(data: { [key: string]: any }, status: number = 200, headers?: { [key: string]: string }) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    })
}


export {
    apiConnection,
    json
}