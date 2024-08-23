import API_CONTANTS from "@/shared/constants/api.constants";
import { LoginResponse } from "../interfaces/login.interfaces";

export class AuthService {

    private readonly baseUrl = `${API_CONTANTS.API_URL}/${API_CONTANTS.API_VERSION}`;

    public async login(username: string, password: string) {
        const resp = await fetch(`${ this.baseUrl }/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (resp.ok) {
            return (resp.json()) as Promise<LoginResponse>;
        }

        throw new Error('Failed to login user');
    }

    public async logout() {
        // Implement logout logic here
    }

}

export default new AuthService();