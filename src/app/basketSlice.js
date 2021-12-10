import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: []
}; 

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const basketProduct = state.basket.find(good => good.id === action.payload);
            if(!basketProduct){
                state.basket.push({id: action.payload, count: 1});
                return state
            }
            state.basket = state.basket.map(good => good.id === action.payload ? ({...good, count: good.count + 1}): good)
            return state
            },
            removeProduct: (state, action) => {
                const basketProduct = state.basket.find(good => good.id === action.payload);
                if(basketProduct.count === 1){
                    state.basket = state.basket.filter(cartProduct => cartProduct.id !== action.payload);
                    return state
                }
                state.basket = state.basket.map(good => good.id === action.payload ? ({...good, count: good.count - 1 }): good)
                return state
            }
        }
});

export const { addProduct, removeProduct } = basketSlice.actions;
export const selectGood = (state) => state.basket.basket;
export default basketSlice.reducer;
 