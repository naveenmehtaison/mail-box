import React from 'react';
import { Button, Container, NavLink, Navbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from './Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StoreActions } from '../Store/ReduxcreateSlice';
const Header = () => {
    console.log('inside header')
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    const handlelogout=(e)=>{
        console.log('inside logout')
        e.preventDefault()
        localStorage.setItem('token','')
        localStorage.setItem('email','')
        Navigate('/form')
        Dispatch(StoreActions.setlogout())
    }
    return (
        <Card>
            <Card.Header >
                <Navbar>
                    <Navbar.Brand className='fs-2 text-primary' >My Wbelink</Navbar.Brand>
                    <Navbar.Brand href='/dashboard'>Dashboard</Navbar.Brand>
                    <Navbar.Brand href='/home'>Home</Navbar.Brand>
                    <Navbar.Brand>Product</Navbar.Brand>
                    <Navbar.Brand  href='/sent'>Sent
                    
                    </Navbar.Brand>
                    <Button onClick={(e)=>handlelogout(e)}>Logout</Button>
                    {/* <Navbar.Brand href='/home'>Container</Navbar.Brand> */}
                    

                </Navbar>

            </Card.Header>

        </Card>
    );
}

export default Header;
    