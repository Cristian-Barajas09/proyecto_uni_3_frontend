import { createSlice } from "@reduxjs/toolkit";


interface CartState {
    items: CartItem[];
}

interface CartItem {
    id: string;
    quantity: number;
    type: 'product' | 'service';
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem(state, action) {
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