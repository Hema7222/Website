

import React from "react";
import hema1 from "../assets/images/hema1.jpg";

const Hero = () => {
  const social_media = [
    { name: "logo-instagram", url: "https://www.instagram.com/hema_._jayabal" },
    { name: "logo-facebook", url: "https://www.facebook.com/profile.php?id=100009900128437" },
    { name: "logo-linkedin", url: "https://www.linkedin.com/in/hemapuspa" },
    { name: "logo-twitter", url: "https://x.com/Hema7222" },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-[500px]">
        <img
          src={hema1}
          alt=""
          className="md:w-5/10 h-[400px] object-cover rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-5xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Hema Puspa</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            I'm a Fullstack Developer
          </h4>
          <button
            className="btn-primary mt-8"
            onClick={scrollToContact}
          >
            Contact Me
          </button>
          <div className="mt-8 text-3xl flex items-center justify-start gap-5">
            {social_media?.map((icon) => (
              <a key={icon.name} href={icon.url} target="_blank" rel="noopener noreferrer">
                <div className="text-gray-600 hover:text-white cursor-pointer">
                  <ion-icon name={icon.name}></ion-icon>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
