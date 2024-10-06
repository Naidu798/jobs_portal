import React, { useContext } from "react";
import { JobsPortalContext } from "../context/JobPortalContext";
import { Link, useLocation } from "react-router-dom";
import { MdCardTravel } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

import SwipeComponent from "../components/Swipe";

const JobCard = ({ job }) => {
  const { setActiveJobDetails, setJobs, saved, setSaved, setBookmarkedJobs } =
    useContext(JobsPortalContext);

  const location = useLocation();

  const saveJob = () => {
    const savedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    localStorage.setItem("bookmarkedJobs", JSON.stringify([...savedJobs, job]));
    setSaved((prev) => [...prev, job?.id]);
  };

  const removeJob = () => {
    const savedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    localStorage.setItem(
      "bookmarkedJobs",
      JSON.stringify(
        savedJobs.filter((jobDetails) => jobDetails?.id !== job?.id)
      )
    );
    setBookmarkedJobs((prev) =>
      prev.filter((jobDetails) => jobDetails?.id !== job?.id)
    );
    setSaved((prev) => prev.filter((idx) => idx !== job?.id));
  };

  return (
    <SwipeComponent saveJob={saveJob} removeJob={removeJob}>
      <div>
        <div className="bg-white border w-[80vw] lg:w-[42vw] border-blue-200 rounded-lg p-6 mb-4 hover:shadow-lg transition-all duration-300">
          <div className="flex md:flex-row flex-col items-center md:justify-between gap-3 md:gap-0">
            <div className="text-gray-700 flex items-center gap-3">
              <div className="bg-slate-50 p-2 rounded-xl">
                <MdCardTravel className="bg-slate-50 text-2xl" />
              </div>
              <p className="text-md font-bold max-w-72 text-ellipsis line-clamp-2">
                {job?.title}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaRupeeSign className="text-xl text-blue-400" />
              <p className="text-gray-700 md:text-lg text-md w-full font-bold">
                {job?.primary_details?.Salary}
                <span className="text-gray-400 text-xs">/month</span>
              </p>
            </div>
          </div>
          <div className="md:flex items-center justify-between mt-6">
            <div className="flex items-center flex-wrap md:gap-5 gap-2 mb-5 md:mb-0">
              <span className="text-gray-700 font-semibold bg-slate-100 py-0.5 px-3 rounded-md">
                {job?.job_hours}
              </span>
              <span className="text-gray-700 font-semibold bg-slate-100 py-0.5 px-3 rounded-md">
                {job?.primary_details?.Job_Type}
              </span>
              <span className="text-gray-700 font-semibold bg-slate-100 py-0.5 px-3 rounded-md">
                {job?.primary_details?.Place}
              </span>
            </div>
            <div>
              <Link
                to={`/${job?.id}`}
                onClick={() => {
                  setActiveJobDetails(job);
                  setJobs([]);
                }}
              >
                <button className="mb-4 text-blue-500 hover:text-blue-800 border border-blue-500 hover:border-blue-800 px-3 py-0.5 rounded-full">
                  View Details
                </button>
              </Link>
              {saved.includes(job?.id) ? (
                location?.pathname === "/bookmarks" ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      removeJob();
                    }}
                    className="ml-4 text-red-400 border border-red-red rounded-full px-3 hover:text-white hover:bg-red-400 pb-0.5"
                  >
                    Remove
                  </button>
                ) : (
                  <span className="text-green-400 ml-4">Bookmarked</span>
                )
              ) : (
                <button
                  className="ml-4 text-green-500 hover:text-white border hover:bg-green-400 border-green-500 rounded-full px-3 pb-0.5"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    saveJob();
                  }}
                >
                  Bookmark
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </SwipeComponent>
  );
};

export default JobCard;
