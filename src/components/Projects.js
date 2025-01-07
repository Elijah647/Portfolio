import React from "react";
import ProjectCard from "../ProjectCards";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A React-based restaurant booking system with Formik and Yup for form validation. The Figma-designed prototype ensures branding alignment, and Jest with React Testing Library validates functionalities.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URLs
    link: "https://portfolio.com",
  },
  {
    title: "Weather App",
    description:
      "A responsive photo gallery showcasing a 5-month trip throughout LATAM, built with React and Bootstrap. Features include lazy loading for faster performance and Lightbox for focused image viewing.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URLs
    link: "https://weatherapp.com",
  },
  {
    title: "Weather App",
    description:
      "Dynamic expense tracker dashboard built with React, Tailwind CSS, and Context API. It provides real-time updates, robust data validation, and an intuitive interface to simplify financial management. Data is persisted with Local Storage for a seamless experience.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URLs
    link: "https://weatherapp.com",
  },
];

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen lg:min-h-0 lg:p-12 text-center gap-1 p-10 px-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 mb-5 underline decoration-amber-500">
          Projects
        </h1>
        <div className=" md:flex md:flex-row md:gap-10 gap-20 my-5 md:my-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
