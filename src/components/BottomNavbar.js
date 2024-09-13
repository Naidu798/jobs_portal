import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();

  return (
    <div className="bg-slate-200 shadow-lg p-2 flex justify-center gap-3 fixed bottom-0 w-screen rounded-t-xl">
      <div>
        <Link to="/">
          <button
            className={`md:text-2xl text-xl px-4 font-semibold mx-3 border-b-4 pb-1 ${
              location?.pathname === "/"
                ? "border-b-blue-500 text-blue-500"
                : "text-blue-400"
            }`}
          >
            Jobs
          </button>
        </Link>
        <Link to="/bookmarks">
          <button
            className={`md:text-2xl text-xl px-4 font-semibold mx-3 border-b-4 pb-1 ${
              location?.pathname === "/bookmarks"
                ? "border-b-blue-500 text-blue-500"
                : "text-blue-400"
            }`}
          >
            Bookmarks
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
