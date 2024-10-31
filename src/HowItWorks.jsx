import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBookOpen,
  faCog,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const HowItWorks = () => {
  const cards = [
    {
      title: "Discover Readlyt",
      content:
        "Readlyt is your gateway to reading faster and more effectively. Train your brain to focus on one word at a time and see your reading speed and comprehension soar.",
      icon: faBookOpen,
    },
    {
      title: "How It Transforms Your Reading",
      content:
        "Paste any text into Readlyt and experience the magic of single-word display. Say goodbye to distractions and hello to efficient reading.",
      icon: faCog,
    },
    {
      title: "Why Choose Readlyt?",
      content:
        "Our innovative approach helps you eliminate subvocalization, reduce eye strain, and dramatically improve your reading efficiency.",
      icon: faChartLine,
    },
  ];

  return (
    <div className="w-full px-4 py-12 bg-neutral-900 text-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-200 mb-4">
            How SpeedReader Works
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base lg:text-lg">
            Revolutionize your reading experience with our cutting-edge
            technology
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg shadow-lg p-6 md:p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:bg-neutral-700 flex flex-col"
            >
              <div className="mb-4 flex justify-center">
                <FontAwesomeIcon
                  icon={card.icon}
                  className="text-3xl md:text-4xl text-blue-400 mb-4"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-neutral-200 mb-3">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-400 flex-grow">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
