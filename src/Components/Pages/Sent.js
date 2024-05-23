import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import FullMail from "./FullMail"

const Sent =()=>{
    const [sentmail,setsentmail] = useState([])
    const mail = localStorage.getItem('email')
    const [fullmail,setfullmail]= useState([])
    const [showmail,setshowmail] = useState(false)
    console.log(mail)
    const handlemail=(ele)=>{
        setfullmail(ele)
        setshowmail(true)
        
    }
    const GetData=async ()=>{
        const res = await axios.get(`https://authentication-1f2ad-default-rtdb.firebaseio.com/sent/${mail}/.json`)
        const dataArray = Object.entries(res.data).map(([key, value]) => {
                
            return { id: key, ...value };
        });
        setsentmail(dataArray)
    }
    useEffect(()=>{
        GetData()
    },[])
    console.log(sentmail)
    if(sentmail.length==0){
        return(<h1>Empty</h1>)
    }
    console.log(sentmail)
    return(
        <>
        {sentmail.map((ele,item)=>(
            <Card className='cursor-pointer' onClick={()=>{handlemail(ele)}}>

                {ele.email}--- {ele.subject}

                
            </Card>
            
        ))}
        { showmail && <FullMail props={fullmail}/>}
        </>

    )
}
export default Sent