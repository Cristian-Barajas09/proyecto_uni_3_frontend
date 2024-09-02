export interface EventsResponse {
    links:        Links;
    current_page: number;
    next_page:    null;
    last_page:    number;
    count:        number;
    results:      Event[];
}

export interface Links {
    next:     null;
    previous: null;
}

export interface Event {
    id:          number;
    title:       string;
    image:       string;
    description: string;
    date:        Date;
    created_at:  Date;
    updated_at:  Date;
    deleted_at:  null;
}
