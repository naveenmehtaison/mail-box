import { Container, Row,Col, Button } from "react-bootstrap"
import Sent from "./Sent"
import Unread from "./Unread"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Inbox from "./Inbox"
import { useSelector, useDispatch } from "react-redux"
import { StoreActions } from "../../Store/ReduxcreateSlice"
import axios from "axios"
import useData from "../useData"
const Dashboard = ()=>{ 
    const counter = useSelector((state)=>state.email.counter)
    const fin_email = localStorage.getItem('email')
    const data = useData(`/${fin_email}.json`)
    const data2 = useData(`/.json`)
   
    // console.log(counter)
    const navigate = useNavigate()
    const [component,setcomponent]= useState('sent')
    const Dispatch = useDispatch()
    const handlenavi=(path,comp)=>{
        // navigate(path)
        // const j = 
        setcomponent(comp)

        
    }


    useEffect(()=>{
  
      Dispatch(StoreActions.setunreadmsg(data))
      Dispatch(StoreActions.getcounter())
      console.log('inside useffect of dashboard')

    },[])
    const menuitems = [{item:'Sent' , path:'/sent', component:'sent'},{item:'unread' , path:'/unread',component:'unread'},{item:'Archive' , path:'/archive'},{item:`Inbox :${counter}`,path:'/inbox',component:'inbox'}]
    return(
        <>
        <Button className="" onClick={()=>{navigate('/form')}}>Compose+</Button>
        <Container fluid>
        
        <Row className="border-black bg-gray-100">
          <Col className='border-black bg-gray-100 ' md={1}>
            
            {menuitems.map((ele,item)=>(
                <Row key={item}>
                    <p className = 'cursor-pointer'  onClick={()=>{handlenavi(ele.path,ele.component)}}>{ele.item}</p>
                </Row>
            ))}


          </Col>
          {/* Second Column */}
          <Col md={11}>
            {console.log(component)}
            {component=='sent' && <Row><Sent/></Row>}
            {component=='inbox' && <Row><Inbox/></Row>}
            {component=='unread' && <Row><Unread/></Row>}
            <Row></Row>
          </Col>
        </Row>
      </Container>
      </>
    )

}
export default Dashboard