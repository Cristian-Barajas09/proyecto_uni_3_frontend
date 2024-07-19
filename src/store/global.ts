import type { IEvent } from "@lib/api/types";
import { atom } from "nanostores";

export const $theme = atom<string>("light");

export const $events = atom<IEvent[]>([]);