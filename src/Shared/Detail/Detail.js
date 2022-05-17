import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  return (
    <div>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat
        magnam quod laboriosam incidunt debitis ratione dolorum repudiandae,
        corrupti explicabo? service detail:{detailId}
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
