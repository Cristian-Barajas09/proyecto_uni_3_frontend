import type { APIResponse } from "./types"
type options ={
    [key: string]: any
}

async function apiConnection<T, B=unknown>(route: string,method: string = "GET",body?: B): Promise<APIResponse<T>> {
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

    console.log(data);
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