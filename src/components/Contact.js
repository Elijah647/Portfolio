import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Import icons

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here (e.g., sending data to an API)
    console.log("Form submitted", formData);
    setFormSubmitted(true);
  };

  return (
    <>
      <div className="text-center py-20 sm:min-h-screen lg:min-h-0 lg:pb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-blue-500 md:mb-20 underline decoration-amber-500">
          Get in touch!
        </h1>
        <div className="flex flex-col px-16 lg:flex-row-reverse items-center justify-center gap-10 lg:gap-24">
          <div className="lg:flex-col justify-center text-white">
            <p>
              Thanks for visiting my page, don't make this the end of the road.
              In fact it's the beginning of a new connection.
            </p>
            {/* Social Media Icons */}
            <div className="mt-5 flex justify-center space-x-6 md:mt-12 md:gap-5">
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
                  className="w-10 h-10 md:w-12 md:h-12 text-white transition duration-200  hover:brightness-150 hover:scale-110"
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

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-8 bg-slate-800 rounded-lg shadow-lg w-full"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {formSubmitted ? "Thank You!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
