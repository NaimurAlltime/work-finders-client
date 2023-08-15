import { useState } from "react";

const Banner = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownItemClick = () => {
    // Handle the dropdown item click here
    setDropdownOpen(false);
  };
  return (
    <div
      className="mt-3 md:flex justify-between items-center md:ml-8"
      data-aos="fade-down"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="md:w-3/5 py-7">
        <h6 className="text-6xl font-bold leading-tight">
          One Step
          <br />
          Closer To Your
          <br />
          <span className="text-indigo-500">Dream Job</span>
        </h6>
        <p className="mt-8 leading-loose">
          Every opening on this great job site is verified
          <br />
          accurate by actual human beings. Tools like automated
          <br />
          job search make the process fast and easy.
        </p>
        {/* <button className="bg-gradient-to-r from-indigo-400 to-cyan-400 mt-4 px-4 py-2 rounded-md text-lg hover:bg-indigo-600 text-white">
          Get Started
        </button> */}
        <div className="flex items-center space-x-4 mt-5 bg-slate-300 py-3">
          {/* Search Bar */}
          <input
            type="text"
            className="px-4 ms-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search for jobs..."
          />

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              Filter By
              <svg
                className={`w-4 h-4 inline-block ml-1 ${
                  dropdownOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown Content */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-md shadow-lg z-10">
                <button
                  onClick={handleDropdownItemClick}
                  className="block px-4 py-2 hover:bg-gray-100 transition w-full text-left"
                >
                  <a href="#FresherJobs">Fresher Jobs</a>
                </button>
                <button
                  onClick={handleDropdownItemClick}
                  className="block px-4 py-2 hover:bg-gray-100 transition w-full text-left"
                >
                  <a href="#ExperienceJobs">Experienced Jobs</a>
                </button>
                <button
                  onClick={handleDropdownItemClick}
                  className="block px-4 py-2 hover:bg-gray-100 transition w-full text-left"
                >
                  <a href="#topItCompany">Top IT Companies</a>
                </button>
                <button
                  onClick={handleDropdownItemClick}
                  className="block px-4 py-2 hover:bg-gray-100 transition w-full text-left"
                >
                  <a href="https://drive.google.com/file/d/1uPDjot5TyKaZdeNA8GH7b_u_5f_UMoKD/view?usp=sharing">
                    My Profile section
                  </a>
                </button>
                <button
                  onClick={handleDropdownItemClick}
                  className="block px-4 py-2 hover:bg-gray-100 transition w-full text-left"
                >
                  <a href="#blog">Blog</a>
                </button>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-cyan-400 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <img
          src="https://img.freepik.com/free-photo/happy-business-man-shirt-with-crossed-arms-looking-away_171337-5011.jpg?w=900&t=st=1681068387~exp=1681068987~hmac=818d200675e0ba66c7b77b04dec46f558f97bbe43dc659fde18ba79072b11e4e"
          alt=""
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        />
      </div>
    </div>
  );
};

export default Banner;
