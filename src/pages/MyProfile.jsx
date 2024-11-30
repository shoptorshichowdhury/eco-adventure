import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-11/12 mx-auto my-12">
      <h3 className="text-xl md:text-3xl font-openSans">
        Welcome to your profile
        <span className="text-green-700 font-bold"> {user?.displayName}!</span>
      </h3>
      <div className="mt-10">
        <h4 className="text-xl font-semibold">Profile Information:</h4>
        <div className="flex flex-col items-start my-5">
          <figure className="w-96 h-80 my-3">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="rounded-xl w-full h-full object-cover bg-top"
            />
          </figure>
          <div className="flex flex-col gap-3 items-start">
            <h2 className="card-title">Name: {user?.displayName}</h2>
            <p className="font-semibold">Email: {user?.email}</p>
            <div className="mt-5">
              <Link
                to="/updateProfile"
                className="btn btn-sm md:btn-md bg-[#064E3B] border border-transparent text-[#F9F9F9] rounded-2xl md:rounded-[28px] px-4 md:px-8 md:text-base hover:border-[#064E3B] hover:bg-[#F9F9F9] hover:text-[#064E3B] transition-all duration-300"
              >
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
