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

export type IPlate = {
    id: number,
	title: string,
	description: string,
	image: string,
	price: string | number
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