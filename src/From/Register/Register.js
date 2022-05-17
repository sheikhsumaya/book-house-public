import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {  useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Social from "../Social/Social";

const Register = () => {
  const emailRef = useRef('');
  const passRef = useRef('');
  const nameRef = useRef('');
  const navigate = useNavigate();
  
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const navigateLogin = () =>{
    navigate('/login');
  }
  
  if(user){
    navigate('/home');
  }
  
  const handleRegister = event =>{
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
   
    createUserWithEmailAndPassword( email,password);
  }
  return (
    <div>
      <div className="container-login w-50 mx-auto">
        <h3 className="text-warning text-center">Please Register Here!</h3>
        <Form
        onSubmit={handleRegister}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
               ref={passRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          Already Register?{" "}
          <Link
            to="/login"
            className="text-warning pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login Here!
          </Link>
        </p>
        <Social></Social>
      </div>
    </div>
  );
};

export default Register;
