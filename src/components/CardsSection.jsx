import React from "react";
import Image from "next/image";

const CardsSection = ({ cards }) => {
  return (
    <div className="fixed top-[22%] md:top-[25%] w-full px-16 md:px-24 flex left-0 gap-[5rem] md:gap-[8rem] overflow-x-scroll cursor-grab text-white">
      {cards?.map((card, index) => (
        <div className="flip-card" key={index}>
          <div className="flip-card-inner">
            <div className="flip-card-front bg-white text-black flex flex-col justify-around">
              <h4
                style={{ fontSize: "calc(1rem + 0.4vw)", fontWeight: "bold" }}
              >
                {card?.title}
              </h4>
              <p className="max-md:text-[15px]">{card?.description}</p>
            </div>
            <div className="flip-card-back flex flex-col justify-around gap-7">
              <Image
                src={card?.image}
                alt="card"
                title="card"
                width={350}
                height={200}
                className="w-full h-[200px] pb-8 border-b border-white" // change hieght and width here
              />
              <div className="flex gap-3 flex-wrap text-[#fcf6f4]">
                {card?.technologies?.map((tech, index) => (
                  <p className="max-md:text-[15px]" key={index}>{tech}</p>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  className="py-2 md:py-3 px-[21%]  bg-white text-black text-[18px] md:text-[20px]"
                  style={{ borderRadius: "4px 4px 50px 4px" }}
                  href={card?.appLink}
                  target="_blank"
                >
                  Visit
                </a>
                {card?.gitHubLink && (
                  <a
                    href={card?.gitHubLink}
                    target="_blank"
                    className="flex items-center"
                  >
                    <Image
                      src="/githubWhite.svg"
                      alt="github"
                      title="github"
                      width={30}
                      height={30}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;
