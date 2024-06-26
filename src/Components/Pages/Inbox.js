import axios from "axios"
import { useEffect,useState } from "react"
import FullMail from "./FullMail"
import { Button, Card } from "react-bootstrap"
import Shimmer from "../Shimmer"
import { useDispatch,useSelector } from "react-redux"
import { StoreActions } from "../../Store/ReduxcreateSlice"
import { geturl } from "../../Utilities/apidata"
import { toast } from "react-toastify"
import useData from "../useData"
import ReadMail from "./Readmail"
const Inbox=()=>{
    console.log('im inside inbox')
    const Dispatch = useDispatch()
    const fin_email = localStorage.getItem('email')
    const [fullmail,setfullmail]= useState([])
    const [showmail,setshowmail] = useState(false)
    const selector = useSelector((state)=>state.email.unreadmsg)
    // const data = useData(`${fin_email}.json`)
    const Handlemail=async (ele)=>{
        setshowmail(!showmail)
        setfullmail(ele)
        const temp ={...ele}
        temp.emoji=false     
        Dispatch(StoreActions.setshowtick(ele))
        Dispatch(StoreActions.getcounter())
        let { id, ...objWithoutId } = temp;     
        let j = {emoji:false}
        try{
            const res = await axios.patch( geturl + `${fin_email}/${ele.id}.json`,{...objWithoutId})
            toast.success('request sent')
        }
        catch(err){
            console.log(err)
            toast.error('erro')
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
    if(selector.length==0){
        return(<Shimmer/>)
    }

    return(
        <>
            {selector.map((ele,item)=>(
                <div key={item} className="relative">
                    <div className="flex justify-self-auto w-full">
                        <Card className='cursor-pointer w-full' onClick={()=>{Handlemail(ele)}}>
                            <p className="w-100%">{ele.emoji == undefined && '🔵'} {ele.email} --- {ele.subject}</p>
                        </Card>
                    </div>
                    <Button className="absolute top-0 right-0" onClick={()=>{Deletehandler(ele)}}>Delete</Button>
                </div>
            ))}
            { showmail && <FullMail props={fullmail}/>}
        </>
    )
}
export default Inbox