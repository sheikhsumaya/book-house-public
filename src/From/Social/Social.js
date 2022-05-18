import React from "react";
import google from "../../Images/logo/image8-2.png";
import git from "../../Images/logo/github_PNG40.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;
  
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-warning w-50"></div>
        <p className="mt-3 px-4">Or</p>
        <div style={{ height: "2px" }} className="bg-warning w-50"></div>
      </div>
      {errorElement}
      <div className="">
        {" "}
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-warning w-50 d-block mx-auto my-3"
        >
          <img src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-warning w-50 d-block mx-auto my-3"
        >
          <img src={git} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
