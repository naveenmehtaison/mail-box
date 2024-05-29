import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { StoreActions } from "../../Store/ReduxcreateSlice"
import FullMail from "./FullMail"
import { Button,Card } from "react-bootstrap"
import { geturl } from "../../Utilities/apidata"
import axios from "axios"
const Unread=(props)=>{
    const Dispatch = useDispatch()
    const fin_email = localStorage.getItem('email')

    const [unread,setunread]= useState([])
    const [fullmail,setfullmail]= useState([])
    const [showmail,setshowmail] = useState(false)
    const selector = useSelector((state)=>state.email.unreadmsg)
    console.log(selector)
    const filter = selector.filter((ele,item)=>(
        ele.emoji==undefined

    ))
    console.log(filter)
    useEffect(()=>{
        setunread(filter)
    },[])
    // setunread(filter)
    if(filter.length==0){
        return(<p>No Unread Mesaage Left</p>)
    }
    const Handlemail=async (ele)=>{
        const temp ={...ele}
        temp.emoji=false
        let { id, ...objWithoutId } = temp;
        console.log(selector)
        console.log(ele)
        setfullmail(ele)
        setshowmail(!showmail)
        // Dispatch(StoreActions.setshowtick(ele))
        // Dispatch(StoreActions.getcounter())
        // ele.emoji=true
        console.log(ele,fin_email)
   
        let j = {emoji:false}
        try{
        const res = await axios.patch( geturl + `${fin_email}/${ele.id}.json`,{...objWithoutId})
        console.log(res.data)
        }
        catch(err){
            console.log(err)
        }
    }
    const Deletehandler=async(ele)=>{
        try{
            const res = axios.delete(geturl+`${fin_email}/${ele.id}.json`)
        }
        catch(err){
            console.log(err)
        }
        Dispatch(StoreActions.deletehandler(ele))
        Dispatch(StoreActions.getcounter())


    }
    
    
    
    
    
    return(
        <>
            {unread.map((ele,item)=>(
                <div className="relative">
                    <div className="flex justify-self-auto w-full">
                        <Card className='cursor-pointer w-full' onClick={()=>{Handlemail(ele)}}>
                            <p className="w-100%">{ele.emoji == undefined && '🔵'} {ele.email} --- {ele.subject}</p>
                        </Card>
                    </div>
                    <Button className="absolute top-0 right-0" onClick={()=>{Deletehandler(ele)}}>Delete</Button>
                    {/* { showmail && <FullMail props={ele}/>} */}
                </div>
                

            ))}
            

        { showmail && <FullMail props={fullmail}/>}
        </>
    )
}
export default Unread