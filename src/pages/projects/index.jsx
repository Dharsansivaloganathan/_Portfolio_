import CardsSection from "@/components/CardsSection";
import NavBar from "@/components/NavBar";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      technologies: ["#ReactJs", "#NodeJS", "#ExpressJs", "#MongoDB", "#JWT"],
      description:
        "E-Commerce Website with add to/delete from cart using CRUD operations. Authorization using JWT with help of Middlewares. Implemented the overall UI using ReactJs.",
      image: "/projects/Ecommerce.png",
      gitHubLink: "https://github.com/Dharsansivaloganathan/E-Commerce-Backend",
      appLink: "https://github.com/Dharsansivaloganathan/E-Commerce-Backend",
    },
    {
      title: "Smart bag for Women Safety",
      technologies: ["#Iot", "#adafruit", "#Cpp", "#ArduinoIde", "#Programming"],
      description:
        "A smart bag designed for women’s safety features wireless charging, GPS tracking, fingerprint security, an internal lighting system, and a safety torch with an electric shock and alert notification system",
      image: "/projects/sb.png",
      gitHubLink: "https://github.com/Dharsansivaloganathan/SMART_BAG_FOR_WOMEN_SAFETY",
      appLink: "https://github.com/Dharsansivaloganathan/SMART_BAG_FOR_WOMEN_SAFETY",
    },
    {
      title: "Rent A Center Website",
      technologies: ["#NodeJs", "#Typescript", "#Microservice", "#Aws"],
      description:
        "Developed scalable solutions with Node.js and AWS Lambda, optimizing performance and automating CI/CD pipelines using Jenkins and AWS CloudFormation. Collaborated globally to resolve production issues, enhancing system efficiency and developer productivity.",
      image: "/projects/rac.png",
      appLink: "https://www.rentacenter.com/",
    },
    {
      title: "Music Streaming Platform",
      technologies: ["#ReactJs", "#TypeScript","#Next.js", "#PostgreSQL", "#Supabase"],
      description:
        "Build a Full Stack Spotify Clone with Next 13.4, React, Tailwind, Supabase, PostgreSQL, and Stripe",
      image: "/projects/ms.png",
      gitHubLink: "https://github.com/Dharsansivaloganathan/music-bit-hacks",
      appLink: "https://github.com/Dharsansivaloganathan/music-bit-hacks",
    },
    {
      title: "Portfolio",
      technologies: ["#ReactJs", "#NextJS","#TailwindCSS"],
      description:
        "Personal Portfolio website to showcase my profile and projects. Build using Frontend tech stacks.",
      image: "/projects/pf.png",
      gitHubLink: "https://github.com/Abinesh64/Portfolio",
      appLink: "/",
    }
  ];
  return (
    <div className="w-[100dvw] h-[100dvh] relative overflow-hidden bg-black">
      <NavBar bgBlack />
      <CardsSection cards={projects} />
      <h3 className="top-[10%] text-bg-font font-bold right-[20%] fixed text-grey-bg-text">
        WORK
      </h3>
      <h3 className="top-[80%] text-bg-font font-bold right-0 fixed text-grey-bg-text">
        SWIPE..
      </h3>
    </div>
  );
};

export default Projects;
