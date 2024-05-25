import { Container, Row,Col, Button } from "react-bootstrap"
import Sent from "./Sent"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Inbox from "./Inbox"
import { useSelector, useDispatch } from "react-redux"
import { StoreActions } from "../../Store/ReduxcreateSlice"
import axios from "axios"


const Dashboard = ()=>{
    const counter = useSelector((state)=>state.email.counter)
    const fin_email = localStorage.getItem('email')
    console.log(counter)
    const navigate = useNavigate()
    const [component,setcomponent]= useState(null)
    const Dispatch = useDispatch()
    const handlenavi=(path,comp)=>{
        // navigate(path)
        setcomponent(comp)
        console.log(comp)
        
    }
    const GetData=async()=>{
      const res = await axios.get(`https://authentication-1f2ad-default-rtdb.firebaseio.com/sent/${fin_email}.json`)
      console.log(res.data)
      const Arraydata = Object.entries(res?.data ?? {}).map(([key, value]) => {
        return { id: key, ...value };
      });
    
      Dispatch(StoreActions.setunreadmsg(Arraydata))
      Dispatch(StoreActions.getcounter())
      console.log(Arraydata,'arraydata')
      
      // const dataArray2 = Object.entries(dataArray).map(([key, value]) => {
              
      //     return { id:key, ...value };
      // });
      // console.log(dataArray2)
    }

    useEffect(()=>{

        GetData()

    },[])
    const menuitems = [{item:'Sent' , path:'/sent', component:'sent'},{item:'unread' , path:'/unread'},{item:'Archive' , path:'/archive'},{item:`Inbox :${counter}`,path:'/inbox',component:'inbox'}]
    return(
        <>
        <Button className="" onClick={()=>{navigate('/form')}}>Compose+</Button>
        <Container fluid>
        
        <Row className="border-black bg-gray-100">
          {/* First Column */}
          <Col className='border-black bg-gray-100 ' md={1}>
            
            {menuitems.map((ele,item)=>(
                <Row>
                    <p className = 'cursor-pointer'  onClick={()=>{handlenavi(ele.path,ele.component)}}>{ele.item}</p>
                </Row>
            ))}


          </Col>
          {/* Second Column */}
          <Col md={11}>
            {console.log(component)}
            {component=='sent' && <Row><Sent/></Row>}
            {component=='inbox' && <Row><Inbox/></Row>}
            {/* <Row><Sent/></Row> */}
            <Row></Row>
          </Col>
        </Row>
      </Container>
      </>
    )

}
export default Dashboard