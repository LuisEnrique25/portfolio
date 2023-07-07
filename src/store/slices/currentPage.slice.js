import { createSlice } from "@reduxjs/toolkit";

const currentPageSlice =  createSlice({
    initialState: localStorage.getItem("currentPage") ?? "",
    name: "currentPage",
    reducers:{
        setCurrentPage: (state, action) => {
            localStorage.setItem("currentPage", action.payload)
            return action.payload
        }
    }
})

export const { setCurrentPage } = currentPageSlice.actions

export default currentPageSlice.reducer