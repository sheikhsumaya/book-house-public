import React from "react";

const Display = ({ displays, setDisplays }) => {
  const { name, img, des, price,quentity, suppliername } = displays;

  return (
    <div className="card border-warning card-container">
      <div className="card-body">
        <div className="image">
          <img src={img} className="card-img-top" alt="..." />
        </div>

        <div className="food-name">
          <h5 className="card-title pt-3">{name}</h5>
          <h6 className="card-title pt-3">By {suppliername}</h6>
        </div>
        <p className="card-text text-justify">{des}</p>
        <p className="card-text text-justify">Price:{price}</p>
        <p className="card-text text-justify">Quantity:{quentity}</p>
      </div>
      <div className="card-footer ">
        <button
          type="button"
          className="btn btn-warning fw-bold w-100"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => {
            setDisplays(displays);
          }}
        >
          SEE INFO
        </button>
      </div>
    </div>
  );
};

export default Display;