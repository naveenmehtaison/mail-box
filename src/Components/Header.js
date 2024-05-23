import React from 'react';
import { Container, NavLink, Navbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from './Form';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Card>
            <Card.Header >
                <Navbar>
                    <Navbar.Brand className='fs-2 text-primary' >My Wbelink</Navbar.Brand>
                    <Navbar.Brand href='/home'>Home</Navbar.Brand>
                    <Navbar.Brand>Product</Navbar.Brand>
                    <Navbar.Brand  href='/sent'>Sent
                    </Navbar.Brand>
                    <Navbar.Brand href='/home'>Container</Navbar.Brand>

                </Navbar>

            </Card.Header>

        </Card>
    );
}

export default Header;
    