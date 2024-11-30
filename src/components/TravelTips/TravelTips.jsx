import { useEffect, useState } from "react";
import TravelTipsCard from "../TravelTipsCard/TravelTipsCard";

const TravelTips = () => {
  const [allTips, setAllTips] = useState([]);

  useEffect(() => {
    fetch("/tips.json")
      .then((res) => res.json())
      .then((data) => setAllTips(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-12">
      {
        allTips.map(tips=> <TravelTipsCard key={tips.id} tips={tips}></TravelTipsCard>)
      }
    </div>
  );
};

export default TravelTips;
