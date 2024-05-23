import { Route,Routes,Router, BrowserRouter } from "react-router-dom"
import Sent from "../Components/Pages/Sent"
import Home from "../Components/Home"
import Form from '../Components/Form'
import Dashboard from "../Components/Pages/Dashboard"
const MyRoutes=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/form' element={<Home/>}></Route>
                    {/* <Route path='/' element={<Form/>}></Route> */}
                    <Route path='/sent' element={<Sent/>}></Route>
                    <Route path="/" element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default MyRoutes