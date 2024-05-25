import axios from "axios"
import { useEffect,useState } from "react"
import FullMail from "./FullMail"
import { Button, Card } from "react-bootstrap"
import Shimmer from "../Shimmer"
import { useDispatch,useSelector } from "react-redux"
import { StoreActions } from "../../Store/ReduxcreateSlice"
const Inbox=()=>{
    const Dispatch = useDispatch()
    const [inboxdata,setinboxdata]= useState([])
    const fin_email = localStorage.getItem('email')
    const [fullmail,setfullmail]= useState([])
    const [showmail,setshowmail] = useState(false)
    const Handlemail=async (ele)=>{
        console.log(ele)
        setfullmail(ele)
        setshowmail(!showmail)
        Dispatch(StoreActions.setshowtick(ele))
        Dispatch(StoreActions.getcounter())
        // ele.emoji=true
        console.log(ele,fin_email)
        let { id, ...objWithoutId } = ele;
        let j = {emoji:false}
        try{
        const res = await axios.patch(`https://authentication-1f2ad-default-rtdb.firebaseio.com/sent/${fin_email}/${ele.id}.json`,{...objWithoutId})
        }
        catch(err){
            console.log(err)
        }
    }
    const GetData=async()=>{
        console.log('hello')
        const res = await axios.get(`https://authentication-1f2ad-default-rtdb.firebaseio.com/sent/${fin_email}.json`)
        console.log(res.data)
        const Arraydata = Object.entries(res?.data ?? {}).map(([key, value]) => {
            return { id: key, ...value };
        });
        
        setinboxdata(Arraydata)
        Dispatch(StoreActions.setunreadmsg(Arraydata))
        Dispatch(StoreActions.getcounter())
        console.log(Arraydata,'arraydata')
        
        // const dataArray2 = Object.entries(dataArray).map(([key, value]) => {
                
        //     return { id:key, ...value };
        // });
        // console.log(dataArray2)
    }
    setTimeout(()=>{
        GetData()
    },2000)

    useEffect(()=>{

        GetData()

    },[2000])
    const Deletehandler=async(ele)=>{
        try{
            const res = axios.delete(`https://authentication-1f2ad-default-rtdb.firebaseio.com/sent/${fin_email}/${ele.id}.json`)
        }
        catch(err){
            console.log(err)
        }
        Dispatch(StoreActions.deletehandler(ele))
        Dispatch(StoreActions.getcounter())


    }
    const selector = useSelector((state)=>state.email.unreadmsg)
    console.log(selector)
    if(selector.length==0){
        return(<Shimmer/>)
    }
    return(
        <>
            {selector.map((ele,item)=>(
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
export default Inbox