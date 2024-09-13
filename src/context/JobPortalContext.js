import { React, useState, createContext, useEffect } from "react";

export const JobsPortalContext = createContext({});

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [activeJobDetails, setActiveJobDetails] = useState(null);
  const [saved, setSaved] = useState([]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    setBookmarkedJobs(savedJobs);
    setSaved(() => savedJobs.map((job) => job?.id));
  }, []);

  return (
    <JobsPortalContext.Provider
      value={{
        jobs,
        setJobs,
        activeJobDetails,
        setActiveJobDetails,
        setSaved,
        saved,
        bookmarkedJobs,
        setBookmarkedJobs,
      }}
    >
      {children}
    </JobsPortalContext.Provider>
  );
};
