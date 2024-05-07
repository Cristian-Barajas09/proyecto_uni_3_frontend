import type { APIResponse } from "./types"
type options ={
    [key: string]: any
}

async function apiConnection<T>(route: string,method: string = "GET",body?: any): Promise<APIResponse<T>> {
    const options: options = {
        method
    }

    if (body) {
        options["body"] = JSON.stringify(body)
    }
    const response = await fetch(
        route,
        options
    )

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