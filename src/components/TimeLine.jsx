import React from "react";

const TimeLine = ({ timeLine }) => {
  return (
    <div className="flex flex-col gap-5 md:mt-[5%] w-full">
      {timeLine?.map((timeLine, index) => (
        <div
          className="p-5 rounded-e-3xl bg-transparent relative w-[100%] flex flex-col md:gap-[6px]"
          key={index}
        >
          <div className="bg-skill-card absolute inset-0 bg-no-repeat bg-cover opacity-30 rounded-3xl" />
          <p className="text-[1.2rem] md:text-[1.6rem] font-bold relative">
            {timeLine?.company}
          </p>
          <p className="text-[1rem] md:text-[1.3rem] font-semibold relative before:absolute before:top-[50%] before:-translate-y-1/2 before:left-0 before:w-[2rem] before:h-[2px] before:bg-black pl-10">
            {timeLine?.role}
          </p>
          <p className="text-[1rem] md:text-[1.3rem] font-medium relative">
            {timeLine?.duration}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
