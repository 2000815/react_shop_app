import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/organisms/Login";
import Logout from "./components/organisms/Logout";
import Navbar from "./components/ecosystems/Navbar";
import Location from "./components/organisms/Location";
import Shops from "./components/organisms/Shops";
import ShopInfo from "./components/organisms/ShopInfo.jsx";
import History from "./components/organisms/History";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const storedValue = localStorage.getItem("isAuth");

  return (
    <Router>
      {storedValue && <Navbar isAuth={isAuth} />}
      <Routes>
        {isAuth ? (
          <>
            <Route path="/location" element={<Location />}></Route>
            <Route path="/shops" element={<Shops />}></Route>
            <Route path="/ShopInfo/:id" element={<ShopInfo />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route
              path="/logout"
              element={<Logout setIsAuth={setIsAuth} />}
            ></Route>
          </>
        ) : (
          <Route path="/" element={<Login setIsAuth={setIsAuth} />}></Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
