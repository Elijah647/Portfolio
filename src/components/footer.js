import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="md:w-full p-5  rounded-2xl">
        <ul className="flex md:gap-12 gap-2 md:text-2xl w-full justify-center items-center text-white">
          <a href="#hero" className="hover:text-blue-400">
            <li>Home</li>
          </a>
          <span>|</span>
          <a href="#aboutMe" className="hover:text-blue-400">
            <li>About</li>
          </a>
          <span>|</span>
          <a href="#skills" className="hover:text-blue-400">
            <li>Skills</li>
          </a>
          <span>|</span>
          <a href="#projects" className="hover:text-blue-400">
            <li>Projects</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
