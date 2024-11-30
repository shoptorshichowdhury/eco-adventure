import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4 md:gap-6">
      <h3 className="text-2xl md:text-5xl font-bold">Page Not Found</h3>
      <p className="text-xl md:text-3xl text-red-700 font-bold">404</p>
      <div className="mt-16">
        <Link
          to="/"
          className="btn btn-sm md:btn-md bg-[#064E3B] border border-transparent text-[#F9F9F9] rounded-2xl md:rounded-[28px] px-4 md:px-8 md:text-base hover:border-[#064E3B] hover:bg-[#F9F9F9] hover:text-[#064E3B] transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
