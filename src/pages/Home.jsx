import { useLoaderData } from "react-router-dom";
import AdventureExperience from "../components/AdventureExperience/AdventureExperience";
import Banner from "../components/Banner/Banner";
import Heading from "../components/Heading/Heading";
import TravelTips from "../components/TravelTips/TravelTips";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="font-openSans">
      <Banner></Banner>
      <Heading
        title={`Unleash Your Spirit of Adventure`}
        subtitle={`Discover thrilling eco-adventures crafted for nature lovers—explore, experience, and embrace the wild.`}
      ></Heading>
      <AdventureExperience data={data}></AdventureExperience>
      <Heading
        title={`Eco-Friendly Travel Tips`}
        subtitle={`Quick tips to make your travel more sustainable`}
      ></Heading>
      <TravelTips></TravelTips>
      <Heading
        title={`Adventurers Stories`}
        subtitle={`Inspiring stories and heartfelt feedback from those who share our passion for sustainable travel`}
      ></Heading>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
