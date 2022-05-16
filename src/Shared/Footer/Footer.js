import React from "react";
import "./Footer.css";

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="bg-dark text-warning p-5">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="ms-5">
          <h2 className="mt-5 ms-5 mb-5 ">Book House</h2>
            <img className="w-50 ms-5" src="https://i.ibb.co/x8vK8qQ/Cartoon-yellow-book-illustration-premium-vector-PNG-removebg-preview.png" alt="" />
            <div className="">
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <h2>You Can Visit Here on-</h2>
          <hr className="text-warning  border border-2 border-warning rounded-pill w-100" />
          <div className="text-start">
            <p>Monday ----------------- 8.00 - 20.00</p>
            <p>Tuesday ------------------ 8.00 - 20.00</p>
            <p>Wednesday ------------- 8.00 - 20.00</p>
            <p>Thursday ---------------- 8.00 - 20.00</p>
            <p>Friday ------------------- 8.00 - 20.00</p>
            <p>Saturday ---------------- 8.00 - 20.00</p>
            <p>Sunday ----------------- closed</p>
          </div>
        </div>
        <div className="col-md-4 text-start">
          <h2>About Book House</h2>
          <hr className="text-warning border border-2 border-warning rounded-pill w-100" />
          <h5 className="mt-3">
            10/9 West Saladaeng 1, Salu road, New York, USA
          </h5>
          <h5 className="mt-3">789-708-9543</h5>
          <h5 className="mt-3">vistinfo@bookhouse.com</h5>
        </div>
      </div>
      <hr className="text-warning border border-2 border-warning rounded-pill w-100" />
      <div className="row">
        <div className="col-md-4">
          <h6 className="m-auto text-center" >COPYRIGHT ©{year} ALL RIGHT RESERVED</h6>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div>
            <i className="fab fa-google"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-visa"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
