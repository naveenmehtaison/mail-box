import { Route,Routes,Router, BrowserRouter } from "react-router-dom"
import Sent from "../Components/Pages/Sent"
import Home from "../Components/Home"
import Form from '../Components/Form'
import Dashboard from "../Components/Pages/Dashboard"
import Inbox from "../Components/Pages/Inbox"
const MyRoutes=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/form' element={<Home/>}></Route>
                    {/* <Route path='/' element={<Form/>}></Route> */}
                    <Route path='/sent' element={<Sent/>}></Route>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/inbox" element={<Inbox/>} />
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default MyRoutes