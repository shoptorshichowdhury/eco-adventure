const Heading = ({ title, subtitle }) => {
    return (
      <div className="w-11/12 mx-auto flex flex-col items-center justify-center space-y-2 md:space-y-3  mt-12 md:mt-24 mb-10 md:mb-16">
        <h3 className="text-xl md:text-4xl font-bold text-center">{title}</h3>
        <p className="text-base md:text-lg font-medium text-center md:w-4/5 lg:w-1/2">{subtitle}</p>
      </div>
    );
  };
  
  export default Heading;
  