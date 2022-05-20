
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {  useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import Social from "../Social/Social";

const Register = () => {
  const emailRef = useRef('');
  const passRef = useRef('');
  const nameRef = useRef('');
  const navigate = useNavigate();
  
  const [agree, setAgree] = useState(false);
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true} );
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  
  const navigateLogin = () =>{
    navigate('/login');
  }
  
  if (loading || updating) {
    return <Loading></Loading>;
  }
  

  if(user){
   console.log('user', user);
  }
  
  const handleRegister = async (event) =>{
    event.preventDefault();
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
   

    await createUserWithEmailAndPassword( email,password);
    await updateProfile({ displayName});
    console.log('Updated profile');
    navigate('/home');
   
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
            <Form.Check className={agree ? 'text-warning' : 'text-primary'}
            onClick={() => setAgree(!agree)}
            type="checkbox" label="Accept our Terms and Conditions" />
          </Form.Group>
          <Button
          disabled={!agree}
          variant="warning w-50 mx-auto d-block my-3" type="submit">
            Register
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
