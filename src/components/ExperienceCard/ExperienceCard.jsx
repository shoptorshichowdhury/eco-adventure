import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const ExperienceCard = ({ experience }) => {
  const { id, adventureTitle, image, ecoFriendlyFeatures } = experience;

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="p-4 bg-[#F9F9F9] rounded-xl border boder-[#064E3B] space-y-2 md:space-y-4 hover:shadow-xl transition-all duration-300"
    >
      <div>
        <img src={image} className="rounded-lg" alt={adventureTitle} />
      </div>
      <div>
        <h3 className="text-xl font-bold">{adventureTitle}</h3>
        <p className="text-base font-semibold text-[#064E3B] mt-3">
          Eco frienly Features:
        </p>
        <p className="text-sm font-medium">
          {ecoFriendlyFeatures.map((ecoFeature, idx) => (
            <li key={idx}>{ecoFeature}</li>
          ))}
        </p>
      </div>
      <div>
        <Link
          to={`/adventureDetails/${id}`}
          className="btn btn-sm md:btn-md rounded-[28px] px-4 md:px-8 bg-[#064E3B] text-[#F9F9F9] hover:bg-[#F9F9F9] hover:text-[#064E3B] border border-transparent hover:border-[#064E3B]"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default ExperienceCard;
