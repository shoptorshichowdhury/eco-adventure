import { useLoaderData } from "react-router-dom";
import AdventureExperience from "../components/AdventureExperience/AdventureExperience";
import Banner from "../components/Banner/Banner";
import Heading from "../components/Heading/Heading";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="font-openSans">
      <Banner></Banner>
      <Heading title={`Unleash Your Spirit of Adventure`} subtitle={`Discover thrilling eco-adventures crafted for nature lovers—explore, experience, and embrace the wild.`}></Heading>
      <AdventureExperience data={data}></AdventureExperience>
    </div>
  );
};

export default Home;
