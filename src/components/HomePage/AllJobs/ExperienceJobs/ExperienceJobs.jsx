import { useEffect, useState } from "react";
import Job from "./../Job";

const ExperienceJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("https://work-finders-server.vercel.app/experience-jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <div
      id="ExperienceJobs"
      className="mt-24 md:ml-6"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h2 className="text-4xl font-semibold text-center">Experience Jobs</h2>
      <p className="text-center mt-5">
        Employers tend to shudder at the spam on big job sites. That makes list
        a nice homespun option to post jobs. It is kind of like the old time
        print classifieds.
      </p>

      <div className="md:grid grid-cols-2 gap-8 mt-7">
        {showAll
          ? jobs.map((job, idx) => <Job key={idx} job={job} />)
          : jobs.slice(0, 6).map((job, idx) => <Job key={idx} job={job} />)}
      </div>
      <div className="text-center">
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-indigo-400 to-cyan-400 mt-4 px-5 py-3 hover:bg-indigo-600 rounded-md text-lg text-white"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default ExperienceJobs;
