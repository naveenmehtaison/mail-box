import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form'
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes/MyRoutes';
import Dashboard from './Components/Pages/Dashboard';
// const MyRoutes=()=>{
//     return(
//         <>
//             <Routes>
//                 <Router path='/home' element={<Home/>}></Router>
//             </Routes>
//         </>
//     )

// }
// export default MyRoutes
function App() {
  return (
    <div >
      <Header></Header>


          <MyRoutes>
            <Header/>
            <Form/>
          </MyRoutes>
      <ToastContainer />
    </div>
  );
}

export default App;
