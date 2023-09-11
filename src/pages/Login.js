import React, { useState } from "react";
import Header from "../components/Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-netflix"
        ></img>
      </div>
      <form className=" absolute top-20 bg-black p-12 w-3/12 mx-auto my-36 right-0 left-0  bg-opacity-80">
        <h1 className=" text-white text-4xl py-5">{isSignInForm ?  "Sign In" : "Sign Up"}</h1>
        { !isSignInForm && (
          <input
          type="text"
          placeholder="Full Name"
          className=" p-4 my-2 w-full bg-[#333] rounded-md text-white"
        /> 
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className=" p-4 my-2 w-full bg-[#333] rounded-md text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-[#333] rounded-md text-white"
        />
        <button type="submit" className=" p-4 mt-7 bg-red-700 text-white w-full rounded-md">
        {isSignInForm ?  "Sign In" : "Sign Up"}
        </button>
        <input type="checkbox" className="my-4"/>
        <label className=" text-[#b3b3b3] mx-2 my-4">Remember Me</label>


        <p className=" py-4 text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ?  "New to Netflix? Sign Up Now." : "Already registered? Sign In Now."}</p>
      </form>
    </div>
  );
};

export default Login;
