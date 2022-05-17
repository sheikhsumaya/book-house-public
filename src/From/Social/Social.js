import React from "react";
import google from '../../Images/logo/image8-2.png';
import git from '../../Images/logo/github_PNG40.png';

const Social = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-warning w-50"></div>
        <p className="mt-3 px-4">Or</p>
        <div style={{ height: "2px" }} className="bg-warning w-50"></div>
      </div>
      <div className="">
        {" "}
        <button className="btn btn-warning w-50 d-block mx-auto my-3">
          <img src={google} alt="" />
         <span className="px-2">Google Sign In</span></button>
        <button className="btn btn-warning w-50 d-block mx-auto my-3">
          <img src={git} alt="" />
         <span className="px-2">Github Sign In</span></button>
        
      </div>
    </div>
  );
};

export default Social;
