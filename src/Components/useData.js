import { geturl } from "../Utilities/apidata";
import { useState , useEffect} from "react";
import axios from "axios";
import { StoreActions } from "../Store/ReduxcreateSlice";
import { useDispatch } from "react-redux";
const useData=(props)=>{   
    console.log('inside usedata',props)
    const Dispatch = useDispatch()
    const [sentmail,setsentmail]= useState('')
    const GetData=async ()=>{
        const res = await axios.get(geturl+ props)
        if(props==`/.json`){
        const dataArray = Object.entries(res.data).map(([key, value]) => {
            let a = {...value}
            console.log('a',a)
            const dataArray2 = Object.entries(a).map(([key,value])=>{
                const j = value
                return{id:key,...value}
            })
            console.log('dataarray2',dataArray2)
                
            return{...dataArray2}
        });
        
        const result = dataArray.map(obj => {
            return Object.values(obj).map(innerObj => {
                return {
                    id: innerObj.id,
                    email: innerObj.email,
                    msg: innerObj.msg,
                    subject: innerObj.subject
                };
            });
        });
        const result2 = result.flat()
        setsentmail(result2)
        
        }
        else{
            const Arraydata = Object.entries(res?.data ?? {}).map(([key, value]) => {
                return { id: key, ...value };
            });
            setsentmail(Arraydata)
            Dispatch(StoreActions.setunreadmsg(Arraydata))
            Dispatch(StoreActions.getcounter())
        }
    }


    useEffect(()=>{
        GetData()

    },[props])
    return(
        sentmail

    )
    
}
export default useData