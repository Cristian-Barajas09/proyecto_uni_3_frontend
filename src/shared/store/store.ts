import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@modules/auth/features/authSlice'
import platesReducer from '@modules/principal/features/plates.slice'
import eventsReducer from '@modules/principal/features/events.slice'
import cartReducer from '@shared/features/cart.slice'
import cartModalReducer from '@shared/features/modal-cart.slice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        plates: platesReducer,
        events: eventsReducer,
        cart: cartReducer,
        cartModal: cartModalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store