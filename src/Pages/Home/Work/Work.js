import React from 'react';
import './Work.css'

const Work = () => {
  return (
    <div>
       <div className="container mb-5 mt-5 text-center">
            <h1 className='mx-auto'>HOW IT WORKS------</h1>
            <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
            <div className="row">
              <div className="col-md-4">
                <i className="fas fa-utensils mt-5 mb-4"></i>
                <h4 className="mb-4 text-warning">Choose Your Favorite Book</h4>
                <h6>
                  Choose your favorite books and order online or by phone. It's
                  easy to customize your order.
                </h6>
              </div>
              <div className="col-md-4">
                <i className="fas fa-biking mt-5 mb-4"></i>
                <h4 className="mb-4 text-warning">We Deliver Your Meals</h4>
                <h6>
                  We prepared and delivered books arrive at your door.
                </h6>
              </div>
              <div className="col-md-4">
                <i className="fas fa-book-copy mt-5 mb-4"></i>
                <h4 className="mb-4 text-warning">Read And Enjoy</h4>
                <h6>
                  No Reading, no acknowledgment, no counting and no cleaning. Enjoy
                  your healthy meals with your family.
                </h6>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Work;