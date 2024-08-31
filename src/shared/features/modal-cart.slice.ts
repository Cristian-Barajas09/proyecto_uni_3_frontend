import { createSlice } from "@reduxjs/toolkit";

interface ModalCartState {
    isOpen: boolean;
}

const initialState: ModalCartState = {
    isOpen: false
}

const modalCartSlice = createSlice({
    name: 'modalCart',
    initialState,
    reducers: {
        openModalCart(state) {
            state.isOpen = true;
        },
        closeModalCart(state) {
            state.isOpen = false;
        }
    }
})

export const { openModalCart, closeModalCart } = modalCartSlice.actions;

export default modalCartSlice.reducer;