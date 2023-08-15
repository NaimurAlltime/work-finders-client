import { useEffect, useState } from "react";
import Company from "./Company";

const TopItCompanies = () => {
  const [itCompany, setItCompany] = useState([]);
  useEffect(() => {
    fetch("https://work-finders-server.vercel.app/it-company")
      .then((res) => res.json())
      .then((data) => setItCompany(data));
  }, []);
  return (
    <div
      id="topItCompany"
      className="mt-20"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h2 className="text-4xl font-semibold text-center">Top It Companies</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        {itCompany.map((topCompany) => (
          <Company key={topCompany._id} topCompany={topCompany}></Company>
        ))}
      </div>
    </div>
  );
};

export default TopItCompanies;
