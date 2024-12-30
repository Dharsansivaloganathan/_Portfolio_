import Image from "next/image";
import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="flex justify-center max-md:w-[90%] md:w-full">
      <div className="grid grid-cols-4 gap-8">
        {skills?.map((skill, index) => (
          <Image
            src={skill?.image}
            alt={skill?.alt}
            title={skill?.title}
            width={skill?.width || 70}
            height={skill?.height || 70}
            key={index}
            className="m-auto hover:scale-150 transition duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
