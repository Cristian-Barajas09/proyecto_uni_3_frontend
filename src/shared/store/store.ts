import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@modules/auth/features/authSlice'
import platesReducer from '@modules/principal/features/plates.slice'
import eventsReducer from '@modules/principal/features/events.slice'
const store = configureStore({
    reducer: {
        auth: authReducer,
        plates: platesReducer,
        events: eventsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store