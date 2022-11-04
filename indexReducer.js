import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import uireducer from "./uireducer";

const store =configureStore( {
    reducer :{
       cart: cartReducer,
       ui:uireducer
    }
})

export default store;