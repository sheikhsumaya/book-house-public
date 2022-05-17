import React from "react";
import { useNavigate } from "react-router-dom";
import "./Display.css";

const Display = ({ displays, setDisplays }) => {
  const { id, name, img, des, price, quentity, suppliername } = displays;
  const navigate = useNavigate();
  const navigateDetails = id =>{
    navigate(`/detail/${id}`);
  }
  return (
    <div className="card border-warning card-container">
      <div className="card-body">
        <div className="image">
          <img src={img} className="card-img-top" alt="..." />
        </div>

        <div className="food-name">
          <h2 className="card-title heading pt-3">{name}</h2>
          <h5 className="card-title heading pt-3">By {suppliername}</h5>
        </div>
        <div className="text-justify">
          <p className="card-text text-justify">{des}</p>
        </div>
        <div className="price">
          <h5 className="card-text text-justify">Price:{price}</h5>
          <h6 className="card-text text-justify">Quantity:{quentity}</h6>
        </div>
      </div>
      <div className="card-footer ">
        <button
          onClick={() => navigateDetails(id)}
          type="button"
          className="btn btn-warning fw-bold w-100"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          SEE INFO
        </button>
      </div>
    </div>
  );
};

export default Display;
