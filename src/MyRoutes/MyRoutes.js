import { Route,Routes,Router, BrowserRouter } from "react-router-dom"
import Sent from "../Components/Pages/Sent"
import Home from "../Components/Home"
import Form from '../Components/Form'
import Dashboard from "../Components/Pages/Dashboard"
import Inbox from "../Components/Pages/Inbox"
import Unread from "../Components/Pages/Unread"
import Header from "../Components/Header"
import { useSelector } from "react-redux"
import { useState } from "react"
import Store from "../Store/Redux"
const MyRoutes=()=>{
    
    const selector = useSelector((state)=>state.email.islogin)
    const [login,setlogin] = useState(selector)
    console.log(selector)
    const selector2 = true
    return(
        <>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    {console.log(selector)}
                    {selector2 && <Route path='/home' element={<Home/>}></Route>}
                    <Route path='/form' element={<Form/>}></Route>
                    {/* <Route path='/*' element={<Form/>}></Route> */}
                    {!selector && <Route path='/sent' element={<Sent/>}></Route>}
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/inbox" element={<Inbox/>} />
                    <Route path="/unread" element={<Unread/>} />
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default MyRoutes