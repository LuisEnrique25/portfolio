import { configureStore } from "@reduxjs/toolkit";
import currentPage from "./slices/currentPage.slice";

export default configureStore({
    reducer:{
        currentPage,
    }
})