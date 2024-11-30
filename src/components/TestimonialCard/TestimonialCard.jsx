const TestimonialCard = ({ item }) => {
  const { photo, name, location, testimonial } = item || {};
  return (
    <div className="bg-[#F9F9F9] shadow-lg px-6 py-12 flex flex-col items-center text-center space-y-4">
      {/* User Photo */}
      <div className=" md:w-[300px] p-2 border border-[#A8D5BA] rounded-[30px]">
        <img className="rounded-[28px]" src={photo} />
      </div>

      {/* User Name and Location */}
      <div>
        <h3 className="text-lg font-semibold text-[#064E3B]">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 italic">“{testimonial}”</p>
    </div>
  );
};

export default TestimonialCard;
