import { useContext, useEffect } from "react";
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import { JobsPortalContext } from "../context/JobPortalContext";

const Bookmarks = () => {
  const { bookmarkedJobs, setBookmarkedJobs, setSaved } =
    useContext(JobsPortalContext);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    setBookmarkedJobs(savedJobs);
    setSaved(() => savedJobs.map((job) => job?.id));
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <div className="md:px-10 md:pt-6 px-3 py-3">
        <div className="bg-white md:p-4 px-6 py-4 rounded-md">
          <h2 className="md:text-2xl text-xl font-semibold ml-4 text-blue-300 bg-blue-50 pb-0.5 px-4 rounded-2xl inline-block">
            Bookmarked Jobs
          </h2>

          <div className="bg-white p-4 flex flex-wrap md:gap-8 gap-5">
            {bookmarkedJobs.length === 0 ? (
              <div className="h-[70vh] flex justify-center items-center">
                <p>No Jobs Found</p>
              </div>
            ) : (
              bookmarkedJobs.map(
                (job, i) =>
                  job?.title && (
                    <JobCard
                      key={"bookmarkedjobs" + i * 2 + job?.id}
                      job={job}
                    />
                  )
              )
            )}
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Bookmarks;
