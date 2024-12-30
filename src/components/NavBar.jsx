import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { debounce } from "lodash";

const NavBar = ({ homePage, bgBlack }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 50);

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize, true);
    return () =>
      window.removeEventListener("resize", handleWindowResize, false);
  }, []);

  return (
    <div className={`${bgBlack ? "text-white" : ""} p-[1rem] md:p-[2rem]`}>
      <h1
        className="top-[1.5rem] md:top-[2rem] left-[1.5rem] md:left-[2rem] fixed"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        DS
      </h1>
      <Link
        href="/"
        className="top-[1.5rem] cursor-pointer md:top-[2rem] left-[50%] fixed border border-black rounded-[50%] p-1 bg-white transform translate-x-[-50%] translate-y-[0px]"
      >
        <Image
          src="/back-arrow.svg"
          alt="backArrow"
          title="Back"
          width={22}
          height={22}
        />
      </Link>
      <div className="left-[1rem] md:left-[2rem] bottom-0 flex flex-col gap-5 absolute">
        <Link
          href="https://www.linkedin.com/in/dharsan-sivaloganathan-a6a0a0201/"
          target="_blank"
          className="animate-bubbleUp opacity-0 delay-[2000ms]"
        >
          <Image
            src={`${bgBlack ? "/linkedInWhite.svg" : "/linkedin.png"}`}
            alt="linkedin"
            title="LinkedIn"
            width={isMobile ? 20 : 25}
            height={isMobile ? 20 : 25}
          />
        </Link>
        <Link
          href="https://github.com/Dharsansivaloganathan"
          target="_blank"
          className="animate-bubbleUp opacity-0 delay-[1500ms]"
        >
          <Image
            src={`${bgBlack ? "/githubWhite.svg" : "/github.png"}`}
            alt="github"
            title="Github"
            width={isMobile ? 20 : 25}
            height={isMobile ? 20 : 25}
          />
        </Link>
        <Link
          href="https://leetcode.com/u/Dharsansivaloganathan/"
          target="_blank"
          className="animate-bubbleUp opacity-0 delay-[1000ms]"
        >
          <Image
            src={`${bgBlack ? "/LeetcodeWhite.svg" : "/leetcode.png"}`}
            alt="leetcode"
            title="Leetcode"
            width={isMobile ? 20 : 25}
            height={isMobile ? 20 : 25}
          />
        </Link>
        <Link
          href="mailto:dharsan1602@gmail.com"
          target="_blank"
          className="animate-bubbleUp opacity-0 delay-[500ms]"
        >
          <Image
            src={`${bgBlack ? "/EmailWhite.png" : "/Email.png"}`}
            alt="email"
            title="Email"
            width={isMobile ? 20 : 25}
            height={isMobile ? 20 : 25}
          />
        </Link>
        <div
          className={`${
            bgBlack ? "bg-white" : "bg-black"
          } w-[2px] h-[9rem] mx-auto animate-slideInBottom`}
        ></div>
      </div>
      {homePage && (
        <Link
          href="https://wa.me/9791650448?text=Hi!%20I'm%20interested%20in%20your%20Profile.%20Can%20we%20discuss%20further?"
          target="_blank"
          className="top-[1.5rem] md:top-[2rem] right-[1.5rem] md:right-[2rem] absolute animate-slideInTop"
        >
          <h2 className="md:text-[20px]">Say hi..</h2>
        </Link>
      )}
      {homePage && (
        <Link
          prefetch
          href="/projects"
          className="top-[45%] right-0 md:right-[1rem] rotate-90 absolute animate-slideInRight"
        >
          <h2>Projects</h2>
        </Link>
      )}
      {homePage && (
        <div className="w-full bottom-[2rem] left-0 absolute flex justify-evenly animate-slideInBottom">
          <Link prefetch href="/about">
            <h2>About</h2>
          </Link>
          <Link prefetch href="/experience">
            <h2>Skills & Experience</h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
