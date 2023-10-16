import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <Container className="border p-4 m-5 cont-log" >
            <h1>Login Page</h1>
           <div>
           <Form className="border p-4 m-5 bg-white">
                <input type="text" placeholder='User Name..'/><br /><br />
                <input type='password' placeholder='Password' /><br /><br />
                <Link to='/home'><Button>Login</Button></Link>
            </Form>
           </div>
        </Container>
      
    </div>
  )
}

export default Login;
