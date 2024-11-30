import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { LuAlertTriangle } from "react-icons/lu";

const Register = () => {
  const { setUser, registerUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //clean the errors
    setError("");

    //validate password
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const lengthRegex = /^.{6,}$/;

    if (!uppercaseRegex.test(password)) {
      setError({
        ...error,
        passwordError: "Must have an Uppercase letter in the password",
      });
      return;
    }
    if (!lowercaseRegex.test(password)) {
      setError({
        ...error,
        passwordError: "Must have an Lowercase letter in the password",
      });
      return;
    }
    if (!lengthRegex.test(password)) {
      setError({
        ...error,
        passwordError: "Length must be at least 6 character",
      });
      return;
    }

    //user registration (email, password)
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((err) => {
            console.log(err.code);
          });
      })
      .catch((err) => {
        setError({ ...error, errorMessage: err.code });
      });
  };

  //create user with Google
  const handleGoogleSubmit = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        setError({ ...error, googleErrorMessage: err.code });
      });
  };

  return (
    <div className="card bg-[#F9F9F9] w-full max-w-sm md:max-w-lg border border-[#A8D5BA]">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <h3 className="text-xl md:text-3xl font-medium text-center text-[#064E3B] mb-3 font-bebas">
            Register Rapidly!
          </h3>
          <label className="label">
            <span className="text-base font-medium text-[#064E3B]">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-base font-medium text-[#064E3B]">Photo</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            name="photo"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-base font-medium text-[#064E3B]">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered"
            name="email"
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
          {error.passwordError && (
            <p className="text-red-700 font-medium text-sm my-2">
              {error.passwordError}
            </p>
          )}
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-sm md:btn-md bg-[#064E3B] border border-transparent text-[#F9F9F9] rounded-2xl md:rounded-[28px] px-4 md:px-8 md:text-base hover:border-[#064E3B] hover:bg-[#F9F9F9] hover:text-[#064E3B] transition-all duration-300"
          >
            Register
          </button>
        </div>
        <p className="mt-3 text-sm text-center">
          Already have an account? Please{" "}
          <Link to="/auth/login" className="text-[#064E3B] font-bold underline">
            Login
          </Link>
          .
        </p>
        {error.errorMessage && (
          <p className="text-sm text-red-700 font-semibold my-3 flex gap-2 items-center">
            <LuAlertTriangle />
            {error.errorMessage}
          </p>
        )}
        <div className="divider">OR</div>
        <div className="form-control mt-6">
          <button
            type="button"
            onClick={handleGoogleSubmit}
            className="btn btn-sm md:btn-md hover:bg-[#064E3B] border hover:text-[#F9F9F9] rounded-2xl md:rounded-[28px] px-4 md:px-8 md:text-base border-[#064E3B] bg-[#F9F9F9] text-[#064E3B] transition-all duration-300"
          >
            <FaGoogle></FaGoogle>
            Sign up with Google
          </button>
        </div>
        {error.googleErrorMessage && (
          <p className="text-red-600 font-medium">{error.googleErrorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Register;
