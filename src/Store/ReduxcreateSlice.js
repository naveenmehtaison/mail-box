import { createSlice } from "@reduxjs/toolkit";
const initalizeobj = {islogin:false,unreadmsg:[],showtick:true,counter:0}
const reduxSlice = createSlice({
    name:'Mailbox',
    initialState:initalizeobj,
    reducers:{
        setlogin(state,action){
            state.islogin=true
        },
        setlogout(state){
            state.islogin=false
        },
        setunreadmsg(state,action){
            state.unreadmsg=action.payload
            console.log(state.unreadmsg)
        },
        setshowtick(state,action){
            console.log('inide diaptach')
            const unread = state.unreadmsg.find((ele,item)=>(
                ele.id==action.payload.id
            ))
            unread.emoji=false
        },
        getcounter(state,action){
            console.log('indedse getcounter',state.counter,state.unreadmsg)
            const filter = Array.from(state.unreadmsg).filter((ele,item)=>
                ele.emoji==undefined
            )
           console.log(filter.length)
            state.counter= filter.length

        }


    }


})
export const StoreActions = reduxSlice.actions
export default reduxSlice