const Company = ({ topCompany }) => {
  const { logo, company, description } = topCompany;
  return (
    <div
      className="card card-compact w-96 bg-base-100 shadow-xl"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
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
