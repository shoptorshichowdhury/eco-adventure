import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { setUser, signInWithGoogle, loginUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  //login user (email, password)
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    //clean the erros
    setError("");

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, errorMessage: err.code });
      });
  };

  //login with google
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        setError({ ...error, googleErrorMessage: err.code });
      });
  };

  const handleForgetPassword = () => {
    navigate("/auth/resetPassword", { state: { email } });
  };

  return (
    <div className="card bg-[#F9F9F9] w-full max-w-sm md:max-w-lg border border-[#A8D5BA]">
      <form onSubmit={handleSubmit} className="card-body">
        <h3 className="text-xl md:text-3xl font-medium text-center text-[#064E3B] mb-3 font-bebas">
          Login Your Account
        </h3>
        <div className="form-control">
          <label className="label">
            <span className="text-base font-medium text-[#064E3B]">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-base font-medium text-[#064E3B]">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            name="password"
            required
          />
          {error.errorMessage && (
            <p className="text-sm text-red-700 font-medium my-2">
              {error.errorMessage}
            </p>
          )}
          <label className="label">
            <a
              onClick={handleForgetPassword}
              className="label-text-alt link link-hover text-[#064E3B] font-medium"
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-sm md:btn-md bg-[#064E3B] border border-transparent text-[#F9F9F9] rounded-2xl md:rounded-[28px] px-4 md:px-8 md:text-base hover:border-[#064E3B] hover:bg-[#F9F9F9] hover:text-[#064E3B] transition-all duration-300">
            Login
          </button>
        </div>
        <p className="mt-3 text-sm text-center">
          Don't have an account? Please{" "}
          <Link
            to="/auth/register"
            className="text-[#064E3B] font-bold underline"
          >
            Register
          </Link>
          .
        </p>
        <div className="divider">OR</div>
        <div className="form-control mt-6">
          <button
            type="button"
            onClick={handleGoogleLogIn}
            className="btn btn-sm md:btn-md hover:bg-[#064E3B] border hover:text-[#F9F9F9] rounded-2xl md:rounded-[28px] px-4 md:px-8 md:text-base border-[#064E3B] bg-[#F9F9F9] text-[#064E3B] transition-all duration-300"
          >
            <FaGoogle></FaGoogle>
            Login with Google
          </button>
          {error.googleErrorMessage && (
            <p className="text-red-600 font-medium">
              {error.googleErrorMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
