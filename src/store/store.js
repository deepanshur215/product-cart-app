import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../slice/slice'

export const store = configureStore({
    reducer : productReducer
})