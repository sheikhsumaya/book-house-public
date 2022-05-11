import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="text-center mt-5 pt-5">
        <Link to={"/home"}>
          <button className="btn btn-warning btn-lg fw-bold mb-5 px-5">
            Go back
          </button>
        </Link>
      </div>
      <img className="w-100" src="https://i.ibb.co/4WxcnKW/notfound-1-1300x900.png" alt="" />
    </div>
  );
};

export default NotFound;
