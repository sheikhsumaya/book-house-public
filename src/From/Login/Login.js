import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import Social from "../Social/Social";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    }
    else{
      toast('Please Enter Your Email');
    }
  };

  return (
    <div className="container-login w-50 mx-auto">
      <h3 className="text-warning text-center">Please Login Here!</h3>
      <Form onSubmit={handleSubmit}>
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

        <Button variant="warning w-50 mx-auto d-block my-3" type="submit">
          Submit
        </Button>
      </Form>
      {errorElement}
      <p>
        New to Food House?{" "}
        <Link
          to="/register"
          className="text-warning pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register Here!
        </Link>
      </p>
      <p>
        Forget Password?{" "}
        <button
          className="btn btn-link text-warning pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Please Reset Password Here!
        </button>
      </p>
      <Social></Social>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
