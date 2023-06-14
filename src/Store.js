import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './ducks/counterSlice'
import todoReducer from './ducks/todoSlice'

export const store = configureStore({
    reducer: counterReducer,
    todo: todoReducer
})
