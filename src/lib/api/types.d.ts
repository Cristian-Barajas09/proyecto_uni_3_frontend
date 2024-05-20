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