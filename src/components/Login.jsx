import React from "react";
import logo from "../assets/goog.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (res) => {
      console.log(res);
      if (res.user) {
        window.location.href = "/profile";
      }
    });
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen  bg-black">
      <Header/>
      <div className="flex flex-col  p-6 w-[460px] h-80 items-center gap-12 rounded-md shadow-md bg-[#121212]">
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="font-medium text-2xl mb-6 text-emerald-50">
            Create a New Account
          </div>
          <button
            className="flex text-emerald-50 border border-[#232324] rounded-lg w-96 justify-center p-4"
            onClick={googleLogin}
          >
            <img className="w-4 h-4 mt-2 mr-2" src={logo} alt="Google Logo" />{" "}
            <p className="text-lg">Signup with google</p>
          </button>
        </div>
        <div className="flex flex-col gap-y-6 items-center justify-center">
          <button onClick={googleLogin} className="text-emerald-50 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] h-12 w-52 ">
            Create an Account
          </button>
          <div className="text-[#909296] flex ">Already have an account ? <p className="text-white ml-2 cursor-pointer" onClick={googleLogin}>Sign In</p> </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
