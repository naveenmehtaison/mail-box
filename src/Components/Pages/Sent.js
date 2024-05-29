import axios from "axios"
import { useEffect, useState } from "react"
import { geturl } from "../../Utilities/apidata"
import FullMail from "./FullMail"
import Shimmer from "../Shimmer"
import { Button, Card } from "react-bootstrap"
import useData from "../useData"

const Sent =()=>{
    console.log('sent is being called')
    const data = useData(`/.json`)
    
    const [sentmail,setsentmail] = useState([])
    const mail = localStorage.getItem('email')
    const [fullmail,setfullmail]= useState([])
    const [showmail,setshowmail] = useState(false)
    const handlemail=(ele)=>{
        setfullmail(ele)
        setshowmail(!showmail)
        
    }
    useEffect(()=>{
        setsentmail(data)
    },[data])

    if(sentmail.length==0){
        return(   <Shimmer/> 
            )
    }
    const Deletehandler=async(ele)=>{
        console.log(ele)

        
        try{
            const res = axios.delete(geturl + `${ele.id}.json`)
        }
        catch(err){
            console.log(err)
        }
        const filter = sentmail.filter((element,item)=>element.id!=ele.id)
        setsentmail(filter)
    }
    return(
        <>
        {sentmail.map((ele,item)=>(
            <>

                <div className="relative">
                    <div className="flex justify-self-auto w-full">
                        <Card className='cursor-pointer w-full' onClick={()=>{handlemail(ele)}}>
                            <p className="w-100%">{ele.email}--- {ele.subject}</p>
                        </Card>
                    </div>
                    <Button className="absolute top-0 right-0" onClick={()=>{Deletehandler(ele)}}>Delete</Button>
                    {/* { showmail && <FullMail props={ele}/>} */}
                </div>


            </>    
        ))}
            
        { showmail && <FullMail props={fullmail}/>}
        </>

    )
}
export default Sent