import { Container, Row,Col, Button } from "react-bootstrap"
import Sent from "./Sent"
import { useNavigate } from "react-router-dom"

const Dashboard = ()=>{
    const navigate = useNavigate()
    const handlenavi=(path)=>{
        navigate(path)
    }
    const menuitems = [{item:'Sent' , path:'/sent'},{item:'unread' , path:'/unread'},{item:'Archive' , path:'/archive'}]
    return(
        <>
        <Button className="" onClick={()=>{navigate('/form')}}>Compose+</Button>
        <Container fluid>
        
        <Row className="border-black bg-slate-600">
          {/* First Column */}
          <Col className='border-black bg-gray-100 ' md={1}>
            
            {menuitems.map((ele,item)=>(
                <Row>
                    <p className = 'cursor-pointer'  onClick={()=>{handlenavi(ele.path)}}>{ele.item}</p>
                </Row>
            ))}
            {/* <Row onClick={handlenavi} className="cursor-pointer">sent</Row>
            <br></br>
            <Row>Draft</Row>
            <br></br>
            <Row>Unride</Row>
            <br></br>
            <Row>Spam</Row>
            <br></br>
            <Row>Archive</Row>
            <br></br>
            <Row>Delete</Row>
            <br></br>
            <Row>Starred</Row>
            <br></br> */}

          </Col>
          {/* Second Column */}
          <Col md={11}>
            <Row>Hii</Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
      </>
    )

}
export default Dashboard