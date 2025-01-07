import React from "react";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 my-2 p-2 w-72 md:w-full">
      <img
        className="w-full h-32 md:h-60 object-cover rounded-t-lg"
        src={image}
        alt={title}
      />
      <h3 className="text-lg font-bold text-gray-800 mt-4">{title}</h3>
      <p className="text-gray-600 mt-2 lg:h-52 lg:px-1">{description}</p>
      <div className="flex justify-center gap-2 lg:gap-5">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4  inline-block text-white text-md w-24 md:w-28 md:text-lg  bg-blue-600 hover:bg-blue-700 px-2 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Live Demo
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-white text-md w-24 md:w-28 md:text-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Github
        </a>
      </div>
    </div>
  );
}
