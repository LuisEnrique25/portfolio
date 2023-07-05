import { createSlice } from "@reduxjs/toolkit";

const currentPageSlice =  createSlice({
    initialState:"",
    name: "currentPage",
    reducers:{
        setCurrentPage: (state, action) => {
            return action.payload
        }
    }
})

export const { setCurrentPage } = currentPageSlice.actions

export default currentPageSlice.reducer