import React from "react";
import imageProfile from "../assets/images/pasfoto.png";

const Home = () => {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          {/* secttion kanan */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hello All 👋, my name is
              <span className="block font-bold text-dark text-3xl md:text-4xl mt-1 ">
                Muhammad Haidar Shahab
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
              Software Engineer ||{" "}
              <span className="text-dark">Front End Developer</span>
            </h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">
              Learn any more of new technology to create the{" "}
              <span className="text-dark font-bold">professional app</span>
            </p>
            <a
              href="#"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>

          {/* section kiri */}
          <div className="w-full self-end px4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img
                src={imageProfile}
                alt="Muhammad Haidar Shahab"
                className="max-w-full mx-auto h-96"
                width={405}
             
              />
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#3b82f6"
                    d="M48.2,-64.7C55.3,-51.6,48.8,-29.5,45.2,-13.4C41.6,2.8,40.9,13,36.3,21C31.7,29,23.2,34.8,13,40.6C2.8,46.4,-9.2,52.3,-24.6,53C-40.1,53.8,-59,49.4,-65.4,37.9C-71.9,26.5,-65.9,7.9,-59.2,-7C-52.5,-22,-45,-33.4,-35,-46C-25,-58.7,-12.5,-72.6,4,-77.4C20.6,-82.2,41.2,-77.9,48.2,-64.7Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
