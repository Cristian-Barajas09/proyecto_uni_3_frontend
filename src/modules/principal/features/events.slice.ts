import { Event } from "@/modules/api/interfaces/events.interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventsService from "@/modules/api/services/events.service";
interface EventState {
    events: Event[];
}

const initialState: EventState = {
    events: []
}

export const getEventsAsync = createAsyncThunk(
    'events/getEvents',
    async (_, {dispatch}) => {
        try {
            const response = await eventsService.getEvents();

            dispatch(setEvents(response));
        } catch (error) {
            console.log(error);
        }
    }
)

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents(state, action) {
            state.events = action.payload;
        }
    }
})

export const { setEvents } = eventsSlice.actions;

export default eventsSlice.reducer;