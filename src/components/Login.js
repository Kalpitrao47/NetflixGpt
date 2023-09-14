import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    checkValidData(email.current.value,password.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value,password.current.value);
    console.log(message)
    setErrorMessage(message)

  }

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form className="p-12 bg-black absolute w-4/12 my-36 mx-auto right-0 left-0 text-black rounded-md bg-opacity-80 px-28" onSubmit={(e)=> e.preventDefault()}>
        <h1 className="font-bold text-3xl py-4 text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Name"
          className="p-2 my-4 w-full rounded-md text-sm"
        />}
        <input
        ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 my-4 w-full rounded-md text-sm"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full rounded-md text-sm"
        />
        <p className="text-orange-500">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-600 w-full rounded-md text-white font-semibold" onClick={handleButtonClick}>
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="space-x-4 my-2 text-sm text-gray-500 flex">
        {isSignInForm ? "New to Netflix?": "Already a User? "} 
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ?  "Sign Up Now" : "Sign In"}</p>
        </div>
        <p className="text-gray-500 my-4 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link>Learn more.</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
