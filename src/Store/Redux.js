import { StoreActions } from "./ReduxcreateSlice"
import { configureStore } from "@reduxjs/toolkit"
import reduxSlice from "./ReduxcreateSlice"
const Store= configureStore({
    reducer:{'email':reduxSlice.reducer}
})
export default Store


