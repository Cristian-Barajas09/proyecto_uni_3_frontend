const ENDPOINTS = {
    BASE: import.meta.env.BACKEND_URL || 'http://192.168.1.41:3000/api',
    VERSION: import.meta.env.BACKEND_VERSION || 'v1',
    EVENTS: "events",
    AUTH: 'token',
    USER: 'users',
    PLATES: 'plates',
}


export {
    ENDPOINTS
}