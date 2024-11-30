import { FaBus, FaHotel, FaRecycle, FaSuitcaseRolling } from "react-icons/fa6";

const TravelTipsCard = ({ tips }) => {
  const { id, title, description } = tips || {};
  return (
    <div className="p-8 bg-[#A8D5BA] space-y-3 rounded-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
      <div className="text-4xl text-[#064E3B] mb-4">
        {id === 1 && <FaSuitcaseRolling />}
        {id === 2 && <FaBus />}
        {id === 3 && <FaHotel />}
        {id === 4 && <FaRecycle />}
      </div>
      <h3 className="text-xl font-bold text-[#064E3B]">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default TravelTipsCard;
