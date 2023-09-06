import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = ({ setIsAuth }) => {
  const nagivate = useNavigate();
  const logInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      nagivate("/location");
    });
  };

  return (
    <div className="body">
      <div className="loginPage">
        <button onClick={logInWithGoogle} className="loginButton">
          さあ、はじめよう
        </button>
      </div>
    </div>
  );
};

export default Login;
