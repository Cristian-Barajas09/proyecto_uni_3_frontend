const ENDPOINTS = {
    BASE: import.meta.env.BACKEND_URL || "http://localhost:8000/api",
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