import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import TimeLine from "@/components/TimeLine";
import React from "react";

const Experience = () => {
  const skills = [
    {
      image: "/skills/javascript.svg",
      alt: "JavaScript",
      title: "JavaScript",
    },
    {
      image: "/skills/typescript.png",
      alt: "TypeScript",
      title: "TypeScript",
    },
    {
      image: "/skills/react.svg",
      alt: "ReactJs",
      title: "ReactJs",
    },
    {
      image: "/skills/nodejs.svg",
      alt: "NodeJs",
      title: "NodeJs",
    },
    {
      image: "/skills/aws.png",
      alt: "AWS",
      title: "AWS",
      width: 110,
      height: 110,
    },
    {
      image: "/skills/jest.png",
      alt: "Jest",
      title: "Jest",
    },
    {
      image: "/skills/postgres.png",
      alt: "PostgreSQL",
      title: "PostgreSQL",
    },
    {
      image: "/skills/mssql.png",
      alt: "MSSQL",
      title: "MSSQL",
    },
    {
      image: "/skills/html.svg",
      alt: "HTML",
      title: "HTML",
      width: 50,
      height: 50,
    },
    {
      image: "/skills/css.svg",
      alt: "CSS",
      title: "CSS",
      width: 50,
      height: 50,
    },
    {
      image: "/skills/api.png",
      alt: "REST API",
      title: "REST API",
    },
    {
      image: "/skills/gitlab.png",
      alt: "GitLab",
      title: "GitLab",
    },
    {
      image: "/skills/java.png",
      alt: "Java",
      title: "Java",
    },
    {
      image: "/skills/express.svg",
      alt: "ExpressJs",
      title: "ExpressJs",
    },
  ];

  const timeLine = [
    {
      company: "Avasoft",
      role: "Software Engineer",
      duration: "Augest 2024 - November 2024",
    },
    {
      company: "Avasoft",
      role: "Software Engineer Intern",
      duration: "February 2024 - July 2024",
    },
  ];

  return (
    <div className="w-[100dvw] h-[100dvh] relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-skills bg-no-repeat bg-cover opacity-45" />
      <NavBar />
      <div className="left-[50%] top-[50%] absolute h-[80vh] w-[80vw] mx-auto transform -translate-x-1/2 -translate-y-1/2 max-md:flex-col gap-10 md:gap-5 flex items-center max-md:justify-evenly xl:justify-evenly overflow-y-scroll">
        <TimeLine timeLine={timeLine} />
        <Skills skills={skills} />
      </div>
      <h3 className="top-[7%] text-medium-bg-font md:text-bg-font font-bold left-[5%] fixed text-[#B3B3B3] opacity-30">
        Experience
      </h3>
      <h3 className="top-[80%] text-medium-bg-font md:text-bg-font font-bold right-[20%] fixed text-[#9b9b9b] md:text-[#B3B3B3] opacity-30">
        Skills
      </h3>
    </div>
  );
};

export default Experience;
