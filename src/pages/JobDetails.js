import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { JobsPortalContext } from "../context/JobPortalContext";

import { IoLocationOutline } from "react-icons/io5";
import { MdCardTravel } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const { activeJobDetails } = useContext(JobsPortalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeJobDetails) {
      navigate("/");
    }
  }, []);

  // Fetch job details by ID here if needed
  return (
    <div className="bg-slate-50">
      <Header />
      <div className="md:py-8 md:px-10 px-3 py-4">
        <div className="bg-white md:px-7 md:py-8 px-3 py-6 rounded-lg border border-blue-100">
          <h2 className="md:text-3xl text-2xl text-center bg-gray-200 md:pt-2 md:pb-3 pt-1 pb-2 font-bold text-blue-600 rounded-full">
            Job Overview
          </h2>
          <div className="mt-8">
            <h3 className="md:text-3xl text-xl font-semibold text-purple-500 bg-blue-50 pb-0.5 px-6 rounded-2xl inline-block my-4">
              {activeJobDetails?.company_name}
            </h3>
            <p className="md:text-xl text-lg font-semibold my-3">
              {activeJobDetails?.title}
            </p>
            <div className="flex items-center gap-2 my-2">
              <MdCardTravel className="text-gray-600 text-2xl" />
              <p className="text-gray-800 text-lg font-semibold my-1">
                {activeJobDetails?.primary_details?.Job_Type}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <RiMoneyRupeeCircleLine className="text-2xl text-green-400" />
              <p className="text-gray-700 text-xl font-bold">
                {activeJobDetails?.primary_details?.Salary}
                <span className="text-gray-400 text-md">/month</span>
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3 mb-5">
              <IoLocationOutline className="text-blue-400 text-2xl" />
              <p className="text-gray-700 text-lg font-semibold">Hyderabad</p>
            </div>
            <span className="text-gray-600 text-2xl font-bold">
              Job Decription :
            </span>
            <p className="text-gray-500 text-md mt-2">
              {activeJobDetails?.other_details}
            </p>
            <div className="flex justify-center mt-6">
              <button className="text-white text-xl bg-blue-400 hover:bg-blue-500 rounded-full px-5 pb-1.5 pt-1">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
