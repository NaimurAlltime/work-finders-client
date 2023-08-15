import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const Job = ({ job }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleApplyJob = () => {
    if (user && user.email) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "job apply successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "apply, please first Login now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-in");
        }
      });
    }
  };

  //   console.log(feature);
  const { _id, logo, title, company, workPlace, location, jobType, salary } =
    job;
  return (
    <div
      className="pb-4"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <img className="w-40 h-14 pr-8" src={logo} alt="" />
      <h3 className="text-3xl font-medium mt-3"> {title} </h3>
      <h5 className="text-2xl text-gray-600 font-medium mt-2"> {company} </h5>
      <div className="mt-2">
        <button className="border border-indigo-500 rounded-sm font-medium text-indigo-500 py-1 px-2">
          {workPlace}
        </button>
        <button className="border border-indigo-500 rounded-sm font-medium text-indigo-500 py-1 px-2 ml-3">
          {jobType}
        </button>
      </div>
      <div className="flex text-xl text-gray-600 font-medium mt-2">
        <p className="mr-4">
          <FmdGoodOutlinedIcon></FmdGoodOutlinedIcon> {location}
        </p>
        <p>
          <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon> Salary:
          {salary}
        </p>
      </div>
      <button
        onClick={() => handleApplyJob(_id)}
        className="bg-indigo-500 mt-4 px-4 py-2 hover:bg-indigo-600 rounded-md text-lg text-white"
      >
        Apply
      </button>
    </div>
  );
};

export default Job;
