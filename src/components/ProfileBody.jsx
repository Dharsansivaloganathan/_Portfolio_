import Link from "next/link";
import React from "react";

const ProfileBody = () => {
  return (
    <div className="left-[50%] top-[50%] absolute h-[80vh] w-[75vw] mx-auto transform -translate-x-1/2 -translate-y-1/2 max-md:flex-col max-md:gap-10 flex items-center md:justify-evenly justify-center">
      <div className="w-[55%] max-md:w-[100%] flex flex-col gap-3">
        <h1 className="text-[1.9rem] md:text-[2.5rem] xl:text-[3rem]">Dharsan Sivaloganathan</h1>
        <h3 className='text-[1.5rem] md:text-[1.9rem] xl:text-[2.3rem] before:content-[""] before:block before:h-[2px] before:bg-black before:w-[2rem] md:before:w-[5rem] pl-[3rem] md:pl-[6rem] relative before:absolute before:left-0 before:top-[50%]'>
          Full Stack Developer
        </h3>
        <p className="md:text-[1.3rem] xl:text-[1.6rem] mt-5">
          Turning challenges into opportunities with creative solutions.
          Transforming ideas into impactful digital experiences that elevate
          businesses.
        </p>
        <Link
          href="https://drive.google.com/file/d/195BpBvy_7fCKlzdReTU-AGy_Z7F0rfdM/view?usp=sharing"
          target="_blank"
          className="py-2 px-8 w-fit mt-4 md:mt-8 rounded-xl bg-black text-white"
        >
          <p className="xl:text-[1.6rem] text-white text-center">Resume</p>
        </Link>
      </div>
      <div className="md:w-[45%] flex justify-center">
        <div className="profile rounded-[50%]"></div>
      </div>
    </div>
  );
};

export default ProfileBody;
