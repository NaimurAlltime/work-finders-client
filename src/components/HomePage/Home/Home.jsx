import TopItCompanies from "../../TopItCompanies/TopItCompanies";
import FresherJobs from "../AllJobs/FresherJobs/FresherJobs";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FresherJobs></FresherJobs>
      {/* <ExperienceJobs></ExperienceJobs> */}
      <TopItCompanies></TopItCompanies>
      <Blog></Blog>
    </div>
  );
};

export default Home;
