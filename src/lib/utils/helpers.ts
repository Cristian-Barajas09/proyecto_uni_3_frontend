import type { ClassCondition } from "@lib/types/utils.types";

export const prerender = true;

export function rtClass(classCondition: ClassCondition): string {
    for (const className in classCondition) {
        if (classCondition[className]) {
            return className;
        }
    }
    return "";
}


export const formatDate = (dateString?:string) => {
    if(!dateString) return '';

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${day}/${month}/${year}`;
};
