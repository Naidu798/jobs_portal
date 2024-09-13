import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Bookmarks from "./pages/Bookmarks";
import JobDetails from "./pages/JobDetails";
import { JobsProvider } from "./context/JobPortalContext";

function App() {
  return (
    <JobsProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/:jobId" element={<JobDetails />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </div>
      </Router>
    </JobsProvider>
  );
}

export default App;
