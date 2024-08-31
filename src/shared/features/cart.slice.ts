import { createSlice } from "@reduxjs/toolkit";



interface CartState {
    items: CartItem[];
}

export interface CartItem {
    id: number;
    quantity: number;
    title: string;
    price: number;
    type: 'product' | 'service';
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemToCart(state, action) {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity -= 1;
                if (item.quantity === 0) {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
            }
        }
    }
})

export const { addItemToCart, removeItemToCart } = cartSlice.actions;



export default cartSlice.reducer;