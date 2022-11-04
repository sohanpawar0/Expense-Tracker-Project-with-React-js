import { createSlice } from "@reduxjs/toolkit";



const uislice =createSlice( {
    name:"ui",
    initialState:{ notofication:null},
    reducers : {

        shownotification( state,action) {
            state.status={
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }

} )

export const uiActions =uislice.actions;
export default uislice.reducer;