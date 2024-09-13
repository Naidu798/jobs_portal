import { useState, useEffect, useContext } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../components/Header";
import { JobsPortalContext } from "../context/JobPortalContext";
import BottomNavbar from "../components/BottomNavbar";
import JobCard from "../components/JobCard";

const Jobs = () => {
  // const [jobs, setJobs] = useState([]);
  const { jobs, setJobs } = useContext(JobsPortalContext);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch(
        `https://testapi.getlokalapp.com/common/jobs?page=${page}`
      );
      const data = await res.json();
      setJobs([...jobs, ...data.results]);
      setPage(page + 1);
      if (data.results.length === 0) setHasMore(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-50 pb-10">
      <Header />
      <div className="md:px-10 md:pt-6 px-3 py-3">
        <div className="bg-white md:p-4 px-2 py-4 rounded-md">
          <h2 className="md:text-2xl text-xl font-semibold ml-4 text-blue-300 bg-blue-50 pb-0.5 px-4 rounded-2xl inline-block">
            Available Jobs
          </h2>
          <InfiniteScroll
            dataLength={jobs.length}
            next={fetchJobs}
            hasMore={hasMore}
            loader={
              <div className="h-[70vh] w-full flex justify-center items-center">
                <p className="text-xl text-gray-700 font-semibold">
                  Loading...
                </p>
              </div>
            }
            endMessage={
              <p className="w-full text-gray-700 text-xl font-semibold block text-center">
                No more jobs
              </p>
            }
            className="bg-white p-4 flex flex-wrap md:gap-8 gap-5"
          >
            {jobs.length === 0 ? (
              <div className="h-[70vh] w-full flex justify-center items-center">
                <p className="text-xl">No Jobs Found</p>
              </div>
            ) : (
              jobs.map(
                (job, i) =>
                  job?.title && (
                    <JobCard key={"jobs" + i * 3 + job?.id} job={job} />
                  )
              )
            )}
          </InfiniteScroll>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Jobs;
