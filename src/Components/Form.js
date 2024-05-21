import { Button, Card, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import {Col} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const Login =()=>{
    async function handlesignup(e){
        try{
          e.preventDefault()
          const obj = {Email:e.target.email.value, Password:e.target.password.value, Password2:e.target.confirmpassword.value}
          console.log(obj)
          if(obj.Password!==obj.Password2){
            
            console.log('password does not match')
            toast.error('password not matched')
              return
          }
  
          console.log(obj)
          const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDR5SSxYk2jPHpBjbYZNPoa76PPAmRPdo', {
              email: obj.Email,
              password: obj.Password,
              returnSecureToken: true 
          })
          console.log('signed up succesfu;;y')
          toast.success('account created')
        }
        catch(err){
          toast.error("err")
            console.log(err + 'erroer occured')
               
        }
      }
    return(
            <Container>
                
                <Row className="justify-content-md-center" md={2}>
                    <Col>
                    <Card>
                        
                        <Form className="p-5 " onSubmit={handlesignup} >
                            <h1 style={{ paddingLeft: '10rem' }}>Signup</h1>
                            {/* <h1 className="p-auto">Login</h1> */}

                                <Form.Control id="email" className='m-2'type='email' required placeholder='enter email'></Form.Control>
                                <Form.Control id='password' className='m-2' type='password' required  placeholder='passwrod'></Form.Control>
                                <Form.Control id='confirmpassword' className='m-2' type='password' required  placeholder='confirm password'></Form.Control>
                            <Button type='submit' size="lg" variant="primary" className='m-2' >
                                Submit
                            </Button>             

                        </Form>
                        <Card>
                            <Button size="lg" variant="success">Already Have an Account Sign up</Button>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Login