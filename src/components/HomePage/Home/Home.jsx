import TopItCompanies from "../../TopItCompanies/TopItCompanies";
import ExperienceJobs from "../AllJobs/ExperienceJobs/ExperienceJobs";
import FresherJobs from "../AllJobs/FresherJobs/FresherJobs";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div id="FresherJobs">
        <FresherJobs></FresherJobs>
      </div>
      <div id="ExperienceJobs">
        <ExperienceJobs></ExperienceJobs>
      </div>
      <div id="ExperienceJobs">
        <TopItCompanies></TopItCompanies>
      </div>
    </div>
  );
};

export default Home;
