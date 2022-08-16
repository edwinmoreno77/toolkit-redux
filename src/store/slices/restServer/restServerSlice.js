import { createSlice } from '@reduxjs/toolkit';


export const serverSlice = createSlice({
    name: 'products',
    initialState: {
        limit: 10,
        products: [],
        isLoading: false,
    },
    reducers: {
        startLoadingProducts: (state, /*action*/) => {
            state.isLoading = true;
        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.limit = action.payload.limit;
            state.products = action.payload.products;
        }

    },
})

// Action creators are generated for each case reducer function
export const { startLoadingProducts, setProducts } = serverSlice.actions
