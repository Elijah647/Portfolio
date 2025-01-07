import React from "react";
import PP from "../assets/PP.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
  return (
    <div className="text-center p-10 md:p-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 mb-5 underline decoration-amber-500">
        About
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-1 lg:gap-10">
        <img
          src={PP}
          alt="Profile"
          className="w-64 h-64 md:w-1/3 md:h-auto object-cover my-5 rounded-full md:rounded-3xl border-2 border-zinc-300"
        />
        <div className=" w-full md:w-2/3">
          <p className="mb-8 text-center md:text-start md:text-lg md:p-10 lg:px-12 md:mb-6 text-white lg:leading-loose">
            I am an active and passionate individual with a lifelong dedication
            to sports, fostering teamwork and resilience. Over the years, I’ve
            expanded my interests to include golf—because, let’s face it, it was
            only a matter of time! I have a deep love for travel, driven by my
            desire to learn from and embrace diverse cultures, which has
            broadened my perspectives and enriched my personal growth. Being
            outdoors fuels my creativity and energy, while my appreciation for
            music brings balance and inspiration to my life. These experiences
            collectively shape my dynamic and multifaceted approach to
            challenges and opportunities.
          </p>
          <div className="flex justify-center md:justify-start gap-5 mt-2 md:mt-0 md:pl-10 lg:pl-12 md:gap-12">
            <a
              href="https://www.linkedin.com/in/elijah-hwang-7a55b4202/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-10 h-10 md:w-12 text-white md:h-12 transition duration-200 hover:text-blue-900 hover:brightness-150 hover:scale-110"
              />
            </a>
            <a
              href="https://github.com/Elijah647"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-10 h-10 md:w-12 md:h-12 text-white transition duration-200 hover:brightness-150 hover:scale-110"
              />
            </a>
            <a
              href="https://twitter.com/elijah_hwang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                className="w-10 h-10 md:w-12 md:h-12 text-white transition duration-200 hover:brightness-150 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
