export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    user:    User;
    refresh: string;
    access:  string;
}

export interface User {
    roles:    string[];
    email:    string;
    username: string;
    id:       number;
}
