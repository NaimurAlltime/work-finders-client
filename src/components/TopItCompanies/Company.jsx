// import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const Company = ({ topCompany }) => {
  const { logo, company, description } = topCompany;
  return (
    // <div className="pb-4">
    //   <img className="w-40 h-14 pr-8" src={logo} alt="" />
    //   <h5 className="text-2xl text-gray-600 font-medium mt-2"> {company} </h5>
    //   <div className="flex text-xl text-gray-600 font-medium mt-2">
    //     <p className="mr-4">
    //       <FmdGoodOutlinedIcon></FmdGoodOutlinedIcon> {location}
    //     </p>
    //   </div>
    //   <Link to={`/job/`}>
    //     <button className="bg-indigo-500 mt-4 px-4 py-2 hover:bg-indigo-600 rounded-md text-lg text-white">
    //       Apply
    //     </button>
    //   </Link>
    // </div>
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={logo} className="w-40 h-14" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {company} </h2>
        <p className="text-justify">{description.slice(0, 250)}...</p>
        <div className="card-actions justify-end">
          <button className="bg-indigo-500 mt-4 px-4 py-2 hover:bg-indigo-600 rounded-md text-lg text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;
