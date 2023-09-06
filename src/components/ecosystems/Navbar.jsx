import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuth }) => {
  return (
    <nav className="bg-yellow-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/location" className="text-white hover:underline">
          現在地取得
        </Link>
        <Link to="/shops" className="text-white hover:underline">
          お店一覧
        </Link>
        <Link to="/history" className="text-white hover:underline">
          閲覧履歴
        </Link>
        {isAuth ? (
          <Link to="/logout" className="text-white hover:underline">
            ログアウト
          </Link>
        ) : (
          <Link to="/login" className="text-white hover:bg-sky-200">
            ログイン
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
