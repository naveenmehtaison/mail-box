import { Button, Card, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import {Col} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login =()=>{
    const [signup,setsignup]= useState(false)
    const navigate=useNavigate()
    const signupfunc=()=>{
        setsignup(!signup)
    }
    async function handlelogin(e){
        try{
          const obj = {Email:e.target.email.value, Password:e.target.password.value}
            e.preventDefault()

            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDR5SSxYk2jPHpBjbYZNPoa76PPAmRPdo', {
                email: obj.Email,
                password: obj.Password,
                returnSecureToken: true 
            })
            toast.success('loggedin suceesfully')
            // const arr = obj.Email.split("")
            // console.log(response.data.idToken)
            // localStorage.setItem('token',response.data.idToken)
            // Dispatch(StoreActions2.login())
            // Dispatch(StoreActions2.istoken())
            

            // const fil_arr = arr.filter((ele,item)=>(
            //     ele!= '@' && ele!='.'
            // ))
            // const fin_email = fil_arr.join('')
            // console.log(fin_email)
            // console.log(fin_email)
            // localStorage.setItem('email',fin_email)
            // Dispatch(userid(fin_email))
            // console.log(email,isauth)
            // console.log(fin_email)
            // toastify()
            navigate('/home')

        }
        catch(err){
          alert(err)
            console.log(err + 'erroer occured')
        }

    }
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
                <>
                
                { signup && <Row className="justify-content-md-center" md={2}>
                    <Col>
                    <Card>
                        
                        <Form className="p-5 " onSubmit={handlesignup} >
                            <h1 style={{ paddingLeft: '10rem' }}>Sign Up</h1>
                            {/* <h1 className="p-auto">Login</h1> */}

                                <Form.Control id="email" className='m-2'type='email' required placeholder='enter email'></Form.Control>
                                <Form.Control id='password' className='m-2' type='password' required  placeholder='passwrod'></Form.Control>
                                <Form.Control id='confirmpassword' className='m-2' type='password' required  placeholder='confirm password'></Form.Control>
                            <Button type='submit' size="lg" variant="primary" className='m-2' >
                                Submit
                            </Button>             

                        </Form>
                        <Card>
                            <Button size="lg" onClick={signupfunc} variant="success">Already Have an Account Sign up</Button>
                        </Card>
                    </Card>
                    </Col>
                </Row>}
                
                { !signup && <Row className="justify-content-md-center" md={2}>
                        <Col>
                        <Card>
                            
                            <Form className="p-5 " onSubmit={handlelogin} >
                                <h1 style={{ paddingLeft: '10rem' }}>Log In</h1>
                                {/* <h1 className="p-auto">Login</h1> */}

                                    <Form.Control id="email" className='m-2'type='email' required placeholder='enter email'></Form.Control>
                                    <Form.Control id='password' className='m-2' type='password' required  placeholder='passwrod'></Form.Control>
                                <Button type='submit' size="lg" variant="primary" className='m-2' >
                                    Submit
                                </Button>             

                            </Form>
                            <Card>
                                <Button size="lg" onClick={signupfunc} variant="success">Create An Account</Button>
                            </Card>
                        </Card>
                        </Col>
                    </Row>

                }
                </>
            </Container>
    )
}
export default Login