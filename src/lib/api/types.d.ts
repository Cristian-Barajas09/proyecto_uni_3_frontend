export interface APIResponse<T> {
    data: T[] | T;
}

export type IEvent = {
    id: number;
    title: string;
    image: string;
    description: string;
    date: string;
}

export type IMenu = {
    id: number;
    image: string;
    title: string;
    price: number;
    ingredients: string[];
    categories: string[];
    description: string;
}

export type ICategory = {
    id: number;
    title: string;
    description: string;
}