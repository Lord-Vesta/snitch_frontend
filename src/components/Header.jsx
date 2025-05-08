import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ storeName }) => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    console.log(path, "path");
  }, [path]);
  return (
    <header className="flex items-center justify-between p-6 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-yellow-600">{storeName}</h1>
      <nav className="space-x-6">
        <Link
          to="/"
          className={`text-gray-700 hover:text-yellow-600 ${
            path === "/" ? "underline underline-offset-2" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`text-gray-700 hover:text-yellow-600 ${
            path === "/products" ? "underline underline-offset-2" : ""
          }`}
        >
          Products
        </Link>
        <Link
          to="/about"
          className={`text-gray-700 hover:text-yellow-600 ${
            path === "/about" ? "underline underline-offset-2" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/contactUs"
          className={`text-gray-700 hover:text-yellow-600 ${
            path === "/contactUs" ? "underline underline-offset-2" : ""
          }`}
        >
          Contact
        </Link>
      </nav>
      <div className="space-x-4">
        <button className="hover:text-yellow-600">🔍</button>
        <button className="hover:text-yellow-600">🛒</button>
        <button className="hover:text-yellow-600">👤</button>
      </div>
    </header>
  );
};

export default Header;
