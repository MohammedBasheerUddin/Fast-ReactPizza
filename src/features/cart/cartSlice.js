import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // cart: [
    //     {
    //         pizzaId: 12,
    //         name: 'mediterian',
    //         quantity: 2,
    //         unitPrice: 16,
    //         totalPrice: 32,

    //     },
    // ],
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem(state, action){
            // simple append
            state.cart.push(action.payload)
         },
        deleteItem(state, action){ 
            // filtering the pizza id which is selected to removed
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
        },
        increaseItemQuantity(state, action){ 
            // first find the item which we want to increase the quantity,
            // then inc the quantity object for that specific one
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;

        },
        decreaseItemQuantity(state, action){
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
         },
        clearCart(state){ 
            state.cart = [];
        },
    }
});

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getCart = (state) => state.cart.cart;

export const getCurrentCartQuatitiyById = id => state => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;
