import { useEffect, useState } from "react";
import Company from "./Company";

const TopItCompanies = () => {
  const [itCompany, setItCompany] = useState([]);
  useEffect(() => {
    fetch("topCompany.json")
      .then((res) => res.json())
      .then((data) => setItCompany(data));
  }, []);
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-semibold text-center">Top It Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
        {itCompany.map((topCompany, idx) => (
          <Company key={idx} topCompany={topCompany}></Company>
        ))}
      </div>
    </div>
  );
};

export default TopItCompanies;
