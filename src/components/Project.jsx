
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hotelapp from "../assets/images/hotelapp.png";
import weather from "../assets/images/weather.png";
import qrcode from "../assets/images/qrcode.png";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Project = () => {
  const projects = [
    {
      img: hotelapp,
      name: "Hotel Reservation App",
      github_link: "https://github.com/Hema7222/MERN-PROJECT",
    },
    {
      img: weather,
      name: "Weather App",
      github_link: "https://github.com/Hema7222/weather",
      live_link: "https://hema-weather.vercel.app/",
    },
    {
      img: qrcode,
      name: "QR-Code Generator",
      github_link: "https://github.com/Hema7222/qr-code_Generator",
      live_link: "https://qr-code-generator-tau-five.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-5xl gap-6 px-5 mx-auto items-center">
        <div className="lg:w-full w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
          >
            {projects.map((project_info, i) => (
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    {project_info.live_link && (
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
