import { createSlice } from "@reduxjs/toolkit";
const initalizeobj = {islogin:false}
const reduxSlice = createSlice({
    name:'Mailbox',
    initinalState:initalizeobj,
    reducers:{
        setlogin(state,action){
            state.islogin=true
        },
        setlogout(state){
            state.islogin=false
        }

    }


})
export const StoreActions = reduxSlice.actions
export default reduxSlice