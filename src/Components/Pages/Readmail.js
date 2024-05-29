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
// import ReadMail from "./Readmail"
const ReadMail=(props)=>{
    console.log(props.props)
    console.log(geturl)
    const Dispatch = useDispatch()
    const [inboxdata,setinboxdata]= useState([])
    const fin_email = localStorage.getItem('email')
    const [fullmail,setfullmail]= useState([])
    const [showmail,setshowmail] = useState(false)
    const selector = props.props
    console.log(selector)
    const data = useData(`${fin_email}.json`)


    const Handlemail=async (ele)=>{
        // console.log(ele)
        setshowmail(!showmail)
        setfullmail(ele)
        const temp ={...ele}
        temp.emoji=false

        
        
        Dispatch(StoreActions.setshowtick(ele))
        Dispatch(StoreActions.getcounter())
        // ele.emoji=true
        // console.log(ele,fin_email)
        // console.log('insidehanlde')
        let { id, ...objWithoutId } = temp;
        
        let j = {emoji:false}
        try{
            console.log(objWithoutId,'objwithoutid')
            const res = await axios.patch( geturl + `${fin_email}/${ele.id}.json`,{...objWithoutId})
            toast.success('request sent')
            console.log(res.data)
        }
        catch(err){
            console.log(err)
            toast.error('erro')
        }

    }
    const GetData=async()=>{
        console.log('get data is being called')
        console.log('hello', geturl + `${fin_email}.json`)
        const res = await axios.get(geturl + `${fin_email}.json`)
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
    // setTimeout(()=>{
    //     GetData()
    // },2000)

    // useEffect(() => {

    //     // const interval = setInterval(() => {
    //     //     GetData();
    //     // }, 2000);
    //     // setsentmail(data)
    //     // // Clean up the interval if the component unmounts
    //     // return () => clearInterval(interval);
    // }, [data]);
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
    console.log('data',data)

    console.log(selector)
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
export default ReadMail