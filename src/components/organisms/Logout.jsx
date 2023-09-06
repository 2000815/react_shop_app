import React, { useEffect } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/logout.css";

const Logout = ({ setIsAuth }) => {
  const nagivate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      nagivate("/");
    });
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("isAuth");
    if (storedValue === false) {
      nagivate("/");
    }
  }, []);

  return (
    <div className="login-page">
      <h1>ログアウトします</h1>
      <button
        onClick={logout}
        className="login-button bg-yellow-600 hover:bg-yellow-700"
      >
        ログアウト
      </button>
    </div>
  );
};

export default Logout;
