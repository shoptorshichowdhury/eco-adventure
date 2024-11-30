import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const ResetPassword = () => {
  const { resetUserPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleResetPassword = (e) => {
    e.preventDefault();

    resetUserPassword(email)
      .then(() => {
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="w-11/12 mx-auto my-12 flex flex-col justify-center items-center">
      <div className="card bg-[#F9F9F9] w-full max-w-md md:max-w-lg border border-[#A8D5BA]">
        <form onSubmit={handleResetPassword} className="card-body">
          <h3 className="text-xl md:text-3xl font-medium text-center text-[#064E3B] mb-3 font-bebas">
            Reset Your Password
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="text-base font-medium text-[#064E3B]">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-sm md:btn-md bg-[#064E3B] border border-transparent text-[#F9F9F9] rounded-2xl md:rounded-[28px] px-4 md:px-8 md:text-base hover:border-[#064E3B] hover:bg-[#F9F9F9] hover:text-[#064E3B] transition-all duration-300">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
