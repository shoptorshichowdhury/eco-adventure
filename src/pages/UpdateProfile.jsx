import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  //handle to update user profile
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
      navigate("/myProfile");
    });
  };

  return (
    <div className="w-11/12 mx-auto my-12 flex flex-col justify-center items-center">
      <div className="card bg-[#F9F9F9] w-full max-w-md md:max-w-lg border border-[#A8D5BA]">
        <form onSubmit={handleSubmit} className="card-body">
          <h3 className="text-xl md:text-3xl font-medium text-center text-[#064E3B] mb-3 font-bebas">
            Update Your Profile
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="text-base font-medium text-[#064E3B]">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base font-medium text-[#064E3B]">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              name="photo"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-sm md:btn-md bg-[#064E3B] border border-transparent text-[#F9F9F9] rounded-2xl md:rounded-[28px] px-4 md:px-8 md:text-base hover:border-[#064E3B] hover:bg-[#F9F9F9] hover:text-[#064E3B] transition-all duration-300">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
