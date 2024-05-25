import { geturl } from "../Utilities/apidata";
import { useState , useEffect} from "react";
import axios from "axios";
const useData=()=>{    
    const [sentmail,setsentmail]= useState('')
    const GetData=async ()=>{
    const res = await axios.get(geturl+`/.json`)
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
    console.log(dataArray)
    const j = dataArray[0]
    console.log(j[1])

    console.log(res.data)
    setsentmail(dataArray)
    }
    useEffect(()=>{
        GetData()
    },[])
    return(
        sentmail

    )
    
}
export default useData