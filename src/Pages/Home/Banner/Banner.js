import './Banner.css'
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className='mx-5 w-80 img-fluid' >
      <Carousel className='mt-5' variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/nBTZvdF/carosul3-1440x850.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className='bnr-text text-white w-100 p-4'>Knowledge is Power</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/G0rWBzW/carosul-1-1440x850.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2 className='bnr-text text-white  w-100 p-4'>Knowledge is Power</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/1rVMGFB/carosul4.webp"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2 className='bnr-text text-white w-100 p-4'>Knowledge is Power</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;