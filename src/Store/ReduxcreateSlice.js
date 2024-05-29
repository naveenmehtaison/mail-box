import { createSlice } from "@reduxjs/toolkit";
const initalizeobj = {islogin:'',unreadmsg:[],showtick:true,counter:0,unreadmsg2:[]}
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
           state.unreadmsg2 = filter
            state.counter= filter.length

        },
        deletehandler(state,action){
            const filter = state.unreadmsg.filter((ele,item)=>(
                ele.id!=action.payload.id

            ))
            state.unreadmsg=filter
        }


    }


})
export const StoreActions = reduxSlice.actions
export default reduxSlice