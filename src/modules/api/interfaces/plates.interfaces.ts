export interface Plate {
    id:          number;
    title:       string;
    description: string;
    image:       string;
    price:       string;
    categories:  number[];
}

export interface PlatesResponse {
    links:        Links;
    current_page: number;
    next_page:    number;
    last_page:    number;
    count:        number;
    results:      Plate[];
}

export interface Links {
    next:     string;
    previous: null;
}


