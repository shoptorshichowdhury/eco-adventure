import { useEffect, useState } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaUserFriends,
  FaLevelUpAlt,
} from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import Modal from "../components/Modal/Modal";

const AdventureDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [singleData, setSingleData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [pageTitle, setPageTitle] = useState("Home");
  let currentLocation = useLocation();

  const titleMap = [
    { path: `/adventureDetails/${id}`, title: `Adventure Details` },
  ];

  useEffect(() => {
    const currentTitle = titleMap.find(
      (item) => item.path === currentLocation.pathname
    );
    if (currentTitle && currentTitle.title) {
      setPageTitle(currentTitle.title);
      document.title = currentTitle.title;
    }
  }, [currentLocation]);

  useEffect(() => {
    const filterdData = [...data].find((single) => single.id == id);
    setSingleData(filterdData);
  }, [data, id]);

  const {
    adventureTitle,
    image,
    categoryName,
    shortDescription,
    adventureCost,
    bookingAvailabilitylocation,
    duration,
    location,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = singleData || {};

  const handleTalkToExpert = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 10 && currentHour < 20) {
      window.open("https://meet.google.com/zih-utpj-qms", "_blank");
    } else {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <div className="w-11/12 mx-auto my-12 font-openSans">
      {/* Header Section */}
      <div className="">
        <div className="w-full h-[200px] md:h-[550px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt={adventureTitle}
          />
        </div>
        <div className="space-y-2 mt-4 mb-5">
          <p className="text-xl md:text-4xl font-bold">{adventureTitle}</p>
          <p className="text-sm md:text-xl font-base">{categoryName}</p>
          <p>{shortDescription}</p>
        </div>
      </div>

      {/* Adventure Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Adventure Info
          </h3>
          <p className="text-gray-700">
            <FaMapMarkerAlt className="inline-block text-[#064E3B] mr-2" />
            <strong>Location: {location}</strong>
            {bookingAvailabilitylocation}
          </p>
          <p className="text-gray-700">
            <FaClock className="inline-block text-[#064E3B] mr-2" />
            <strong>Duration: </strong>
            {duration}
          </p>
          <p className="text-gray-700">
            <FaLevelUpAlt className="inline-block text-[#064E3B] mr-2"></FaLevelUpAlt>
            <strong>Level: </strong>
            {adventureLevel}
          </p>
          <p className="text-gray-700">
            <FaMoneyBill className="inline-block text-[#064E3B] mr-2"></FaMoneyBill>
            <strong>Cost: </strong>${adventureCost}
          </p>
          <p className="text-gray-700">
            <FaUserFriends className="inline-block text-[#064E3B] mr-2" />
            <strong>Max Group Size: </strong>
            {maxGroupSize}
          </p>
        </div>

        {/* Special Instructions */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Special Instructions
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            {specialInstructions?.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Included Items
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            {includedItems?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Eco-Friendly Features
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            {ecoFriendlyFeatures?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* button */}
      <div>
        <button
          onClick={handleTalkToExpert}
          className="btn btn-sm md:btn-md rounded-[28px] px-4 md:px-8 bg-[#064E3B] text-[#F9F9F9] hover:bg-[#F9F9F9] hover:text-[#064E3B] border border-transparent hover:border-[#064E3B]"
        >
          Talk with Expert
        </button>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
      ></Modal>
    </div>
  );
};

export default AdventureDetails;
