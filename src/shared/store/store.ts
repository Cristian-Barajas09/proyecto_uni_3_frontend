import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@modules/auth/features/authSlice'
import platesReducer from '@modules/principal/features/plates.slice'
const store = configureStore({
    reducer: {
        auth: authReducer,
        plates: platesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store