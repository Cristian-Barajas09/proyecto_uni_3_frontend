export interface ServiceAuth {
    getToken(): string | undefined;
    setToken(token: string): void;
}