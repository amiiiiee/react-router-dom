
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Regestration = () => {
  return (
    <div className='hi'>
        <Container  className="border p-4 m-5 cont-reg" >
        <h1>Regestration Form</h1>
        <div>
            
            <Form className="border p-4 m-6 bg-white">
           
            <input type="text" name='text' placeholder='First Name' /><br /><br />
            <input type="text" name='text' placeholder='Last Name'/> <br /><br />
            <input type="text" name='text'  placeholder='User Name'/> <br /><br />
            <input type="email" name='email'  placeholder='E-mail'/> <br /><br />
            <input type="password" name='password'  placeholder='Password'/> <br /><br />
            <input type="password" name='password'  placeholder='Conform Password'/> <br /><br />
           <Link to='/login' ><Button>Submit</Button></Link>
            
            </Form>
           
        </div>
        </Container>
    </div>
  )
}

export default Regestration;
