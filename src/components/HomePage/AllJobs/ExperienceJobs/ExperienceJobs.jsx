import { useEffect, useState } from "react";
import Job from "./../Job";

const ExperienceJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/all-jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <div id="ExperienceJobs" className="mt-24 md:mx-20">
      <h2 className="text-4xl font-semibold text-center">Experience Jobs</h2>
      <p className="text-center mt-5">
        Employers tend to shudder at the spam on big job sites. That makes list
        a nice homespun option to post jobs. It is kind of like the old time
        print classifieds.
      </p>

      <div className="md:grid grid-cols-2 gap-8 mt-7">
        {showAll
          ? jobs.map((job) => <Job key={job._id} job={job} />)
          : jobs.slice(0, 4).map((job) => <Job key={job.id} job={job} />)}
      </div>
      <div className="text-center">
        <button
          onClick={handleClick}
          className="bg-indigo-500 mt-4 px-5 py-3 hover:bg-indigo-600 rounded-md text-lg text-white"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default ExperienceJobs;
