import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from './Form';

const Header = () => {
    return (
        <Card>
            <Card.Header >
                <Navbar>
                    <Navbar.Brand className='fs-2 text-primary' >My Wbelink</Navbar.Brand>
                    <Navbar.Brand>Home</Navbar.Brand>
                    <Navbar.Brand>Product</Navbar.Brand>
                    <Navbar.Brand>About</Navbar.Brand>


                </Navbar>

            </Card.Header>

        </Card>
    );
}

export default Header;
    