import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[12vh] bg-white shadow-lg flex items-center px-6">
      <Link to="/">
        <div>
          <h1 className="text-3xl font-bold text-blue-600 p-0 m-0">
            Jobs<span className="font-semibold text-blue-400">Portal</span>
          </h1>
          <p className="text-gray-400 text-[12px] p-0 m-0">
            Growup your career
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
