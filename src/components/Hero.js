import React, { useState, useEffect } from "react";

const Hero = () => {
  const [name, setName] = useState("");
  const [currentLength, setCurrentLength] = useState(0);
  const [nameCompleted, setNameCompleted] = useState(false);

  const codeletters = "&#*+%?£@$"; // Random characters for animation

  useEffect(() => {
    const message = "Elijah Hwang"; // The name to animate

    const generateRandomString = (length) => {
      let randomText = "";
      while (randomText.length < length) {
        randomText += codeletters.charAt(
          Math.floor(Math.random() * codeletters.length)
        );
      }
      return randomText;
    };

    const animateName = () => {
      if (currentLength < message.length) {
        setCurrentLength((prev) => prev + 1);
        const randomString = generateRandomString(currentLength);
        setName(randomString); // Update the animated text
      } else {
        setName(message); // Final name after animation
        setNameCompleted(true); // Mark animation as complete
      }
    };

    const interval = setInterval(animateName, 125);
    return () => clearInterval(interval);
  }, [currentLength]);

  return (
    <div
      className="relative flex flex-col md:flex-row items-center gap-y-2 justify-center min-h-screen gap-x-20 bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/bg.jpeg')" }}
    >
      {/* Background Tint Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 md:w-1/2 text-center md:text-start flex flex-col items-center md:items-start p-5 md:p-1">
        <p className="text-2xl font-bold text-gray-100 mb-2 animate-fadeInUp delay-300">
          Hey, I'm
        </p>

        {/* Animated Name with Typewriter Effect */}
        <p
          className={`text-4xl font-bold text-blue-500 mb-2 md:text-6xl lg:text-7xl underline decoration-amber-500 ${
            nameCompleted ? "animate-fadeIn" : ""
          }`}
        >
          {name}
        </p>

        {/* Animated "Web Developer" Title */}
        <p className="text-2xl md:text-3xl font-bold text-yellow-500 mb-10 animate-scaleUp delay-600">
          &lt; Web Developer /&gt;
        </p>

        <p className="text-lg text-white mb-10 px-5 md:p-0 animate-fadeInUp delay-900">
          A passionate web developer skilled in React and Tailwind CSS. I create
          visually appealing, responsive, and functional web applications that
          deliver outstanding user experiences.
        </p>

        <div className="flex space-x-4 mb-4 opacity-0 animate-fadeInUp delay-1100">
          <button className="text-md bg-black text-white border-yellow-400 p-2 w-28 md:w-36 md:text-lg rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-110">
            Resume
          </button>
          <button className="text-md bg-white text-black w-28 p-2 md:w-36 md:text-lg rounded-full hover:bg-neutral-200 transition duration-300 transform hover:scale-110">
            Contact info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
