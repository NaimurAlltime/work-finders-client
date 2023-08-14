const Banner = () => {
  return (
    <div className="mt-3 md:flex justify-between items-center md:ml-20">
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
        <button className="bg-gradient-to-r from-indigo-400 to-cyan-400 mt-4 px-4 py-2 rounded-md text-lg hover:bg-indigo-600 text-white">
          Get Started
        </button>
      </div>
      <div className="w-full h-full">
        <img
          src="https://img.freepik.com/free-photo/happy-business-man-shirt-with-crossed-arms-looking-away_171337-5011.jpg?w=900&t=st=1681068387~exp=1681068987~hmac=818d200675e0ba66c7b77b04dec46f558f97bbe43dc659fde18ba79072b11e4e"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
