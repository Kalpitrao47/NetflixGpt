import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayname} = user;
        dispatch(addUser({ uid:uid, email:email, displayname:displayname }));
        navigate("/browse");

        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });

    //Unsucscribe when Component unmounts
    return () => unsubscribe();

  },[])

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-40"
        />
        {user && (
          <div className="flex p-2">
            <img
              className="w-10 h-10"
              src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVmx9oGm5_dAzcKXK3VTcfVCuIPVm-bBkF4OFQ3XC6ygWNG1A-Fe15PmYc8pGYZu1K3dMMrgM5GETNyW2Aeq55MPWHPhQQQ.png?r=b39"
            />
            <button className="font-bold text-white" onClick={handleSignOut}>
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
