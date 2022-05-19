import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Detail.css'

const Detail = () => {
  const { detailId } = useParams();
  const [detail, setDetail] = useState({});


  useEffect( ()=>{
    const url = `http://localhost:5000/data/${detailId}`;

    fetch(url)
    .then(res=> res.json())
    .then(data =>setDetail(data));
  }, [])

  return (
    <div className="top-detail">
      <h2 className=" w-50 mx-auto text-warning">
        Here Are Details About Products
      </h2>
      <div className="card border-warning card-container w-50 mx-auto">
      <div className="card-body">
        <div className="image">
          <img src={detail.img} className="card-img-top " alt="..." />
        </div>

        <div className="food-name">
          <h2 className="card-title heading pt-3">{detail.name}</h2>
          <h5 className="card-title heading pt-3">By {detail.suppliername}</h5>
        </div>
        <div className="text-justify">
          <p className="card-text text-justify">{detail.des}</p>
        </div>
        <div className="price">
          <h5 className="card-text text-justify">Price:{detail.price}</h5>
          <h6 className="card-text text-justify">Quantity:{detail.quentity}</h6>
        </div>
      </div>
      </div>
      <div className="text-center">
        <Link to="/home">
          <button className=" mb-3 mt-4 btn btn-warning">Go to Home</button>
        </Link>
      </div>
   </div>
  );
};

export default Detail;
