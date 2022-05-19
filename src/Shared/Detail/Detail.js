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
  },[])

  return (
    <div>
      <h2 className="top-detail">
        Here Are Details About:{detail.name}
      </h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Go to details</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
