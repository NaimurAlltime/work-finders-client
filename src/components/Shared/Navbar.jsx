import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;

  const navItems = (
    <>
      <li className="text-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg">
        <Link to="/">About</Link>
      </li>
      <li className="text-lg">
        <Link to="/">Contact Us</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar max-w-screen-xl mt-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl md:text-3xl font-semibold"
          >
            <img className="w-[45px]" src="/workfinders-logo.png" alt="" />
            WorkFinders
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                style={{ width: "56px", height: "53px" }}
                // src={user.photoURL}
                src=""
                className="mr-3 rounded-full border-gray-100 p-1"
              />
              <button
                // onClick={handleLogOut}
                className="btn btn-outline btn-info"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn px-5 border-0 bg-[#6dd5ed]">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
