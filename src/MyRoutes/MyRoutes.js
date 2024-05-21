import { Route,Routes,Router, BrowserRouter } from "react-router-dom"
import Home from "../Components/Home"
import Form from '../Components/Form'
const MyRoutes=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/' element={<Form/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default MyRoutes