import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3586ff] text-white">
      <div className="footer pt-10 px-14 pb-7">
        <div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-semibold"
          >
            <img className="w-[45px]" src="/workfinders-logo.png" alt="" />
          </Link>
          <p className="text-xl">WorkFinders</p>
          <div className="flex gap-4 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div>
          <span className="footer-title">QUICK LINKS</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Tips & Tricks</a>
        </div>
        <div>
          <span className="footer-title">For Candidates</span>
          <a className="link link-hover">Browse Jobs</a>
          <a className="link link-hover">Job Packages</a>
          <a className="link link-hover">Large projects</a>
          <a className="link link-hover">Job Alerts</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="text-center pb-5">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          WorkFinders
        </p>
      </div>
    </footer>
  );
};

export default Footer;
