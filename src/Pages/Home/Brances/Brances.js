import React from 'react';
import './Brances.css'

const Brances = () => {
  return (
    <div className='text-center'>
      <h1 className="fs-1 mt-5 text-center">BRANCHES</h1>
        <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
        <div className="row mb-5 mt-5">
          <div className="col-md-6">
            <i className="fas fa-map-marked-alt mb-4"></i>
            <h5>BOOK HOUSE CENTER</h5>
            <p>
              103 North Loundoun Street., Winchester, VA
              <br />
              +63 9202740366
            </p>
          </div>
          <div className="col-md-6 ">
            <i className="fas fa-map-marked-alt mb-4"></i>
            <h5>BOOK HOUSE SQUARE</h5>
            <p>
              Lake House, 13 Hanway Square, London, England
              <br />
              +38 7648592568
            </p>
          </div>
        </div>
    </div>
  );
};

export default Brances;