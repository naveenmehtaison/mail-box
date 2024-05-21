import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div >
      <Header/>
      <Form/>
      <ToastContainer />
    </div>
  );
}

export default App;
