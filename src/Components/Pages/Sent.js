import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import FullMail from "./FullMail"
import Shimmer from "../Shimmer"

const Sent =()=>{
    const [sentmail,setsentmail] = useState([])
    const mail = localStorage.getItem('email')
    const [fullmail,setfullmail]= useState([])
    const [showmail,setshowmail] = useState(false)
    console.log(mail)
    const handlemail=(ele)=>{
        setfullmail(ele)
        setshowmail(!showmail)
        
    }
    const GetData=async ()=>{
        const res = await axios.get(`https://authentication-1f2ad-default-rtdb.firebaseio.com/sent/.json`)
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
        // const dataArray2 = Object.entries(dataArray).map(([key, value]) => {
                
        //     return { id:key, ...value };
        // });
        // console.log(dataArray2)
        console.log(res.data)
        setsentmail(dataArray)
    }
    useEffect(()=>{
        GetData()
    },[])
    console.log(sentmail)
    if(sentmail.length==0){
        return(   <Shimmer/> 

            )
    }
    console.log(sentmail[0][0])
    return(
        <>
        {sentmail.map((ele,item)=>(
            <Card className='cursor-pointer' onClick={()=>{handlemail(ele[0])}}>

                <p>{ele[0].email}--- {ele[0].subject}</p>

                
            </Card>
            
        ))}
        { showmail && <FullMail props={fullmail}/>}
        </>

    )
}
export default Sent