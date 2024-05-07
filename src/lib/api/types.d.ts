export interface APIResponse<T> {
    data: T[] | T;
}

export type IEvent = {
    id?: number;
    title: string;
    image: string;
    description: string;
    date: string;
}