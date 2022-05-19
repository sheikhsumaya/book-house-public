import React from "react";
import { Form } from "react-bootstrap";

const Contract = () => {
  return (
    <div className="container">
      <h1 className="mt-5 pt-5 text-center">Contact Us</h1>
      <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
      <div className="row g-3">
        <img
          className="col-md-6 pb-3"
          src="https://i.ibb.co/s5DtQYk/contact.png"
          alt=""
        />
       
        <Form className="mt-md-5 pt-5 col-md-6">
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Type Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Type Your Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Opinion</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button
            type="button"
            className="btn btn-outline-warning btn-lg mt-3 mb-5 text-dark"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Contract;
