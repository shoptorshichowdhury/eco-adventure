import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const AdventureExperience = ({ data }) => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
      {data.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
        ></ExperienceCard>
      ))}
    </div>
  );
};

export default AdventureExperience;
