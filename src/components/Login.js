import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    checkValidData(email.current.value, password.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    //Sign In Sign Up Logic
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: email.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            setErrorMessage(error.message)
            // An error occurred
            // ...
          });
          console.log(user);
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "_" + errorMessage)
  });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="Background"
        />
      </div>
      <form
        className="p-12 bg-black absolute w-4/12 my-36 mx-auto right-0 left-0 text-black rounded-md bg-opacity-80 px-28"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="text-black p-2 my-4 w-full rounded-md text-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="text-black p-2 my-4 w-full rounded-md text-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-black p-2 my-4 w-full rounded-md text-sm"
        />
        <p className="text-orange-500">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 w-full rounded-md text-white font-semibold"
          onClick={handleButtonClick}
        >
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="space-x-4 my-2 text-sm text-gray-500 flex">
          {isSignInForm ? "New to Netflix?" : "Already a User? "}
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </p>
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
