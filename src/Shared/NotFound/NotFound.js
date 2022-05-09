import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
    
      <div>
        <Link to={"/home"}>
          <button className="btn btn-warning btn-lg fw-bold mb-5 px-5">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;