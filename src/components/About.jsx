


import React from "react";
import about from "../assets/images/about.png"; 

const About = () => {
  return (
    <section id="about" className="min-h-screen py-10 px-3 md:px-10 flex items-center">
      <div className="flex-1 md:mr-10">
        <h2 className="text-4xl font-bold text-white">About <span className="text-cyan-600">Me</span></h2>
        <p className="text-lg text-gray-600 mt-4">
          text
        </p>
        <p className="text-lg text-gray-600 mt-4">
         text
        </p>
        <p className="text-lg text-gray-600 mt-4">
          text
        </p>
        <br />
          <a href="./src/assets/Hema Puspa J_Resume.pdf" download>
            <button className="btn-primary">Download CV</button>
          </a>
      </div>
      <div className="flex-1 flex justify-center md:ml-10 mt-10 md:mt-0">
        <img src={about} alt="Hema Puspa" className="w-11/11 h-[450px] max-w-sm rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default About;
