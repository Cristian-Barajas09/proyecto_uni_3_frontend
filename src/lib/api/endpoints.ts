const ENDPOINTS = {
    BASE: import.meta.env.BACKEND_URL,
    VERSION: import.meta.env.BACKEND_VERSION || 'v1',
    EVENTS: "events",
    AUTH: 'token',
    USER: 'users',
    PLATES: 'plates',
    CATEGORIES: 'categories',
    INGREDIENTS: 'ingredients',
    QR: 'qr',
}


export {
    ENDPOINTS
}