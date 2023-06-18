import React from "react";
import google from "../assets/images/clients/google.png";
import gojek from "../assets/images/clients/gojek.png";
import tokopedia from "../assets/images/clients/tokopedia.png";
import traveloka from "../assets/images/clients/traveloka.png";

const Client = () => {
  return (
    // <!-- Clients Section Start -->
    <section id="clients" className="bg-slate-800 pt-36 pb-32 dark:bg-slate-300">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Clients</h4>
            <h2 className="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl">
              Great Company
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg">
              Use great technology to create applications with a simple and
              professional User Interface with a Javascript library like
              building React with all other complete for building like for
              custom with typescript or upgrade to next js framework.{" "}
            </p>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="#"
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src={google} alt="Google" />
            </a>
            <a
              href="#"
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src={gojek} alt="Gojek" />
            </a>
            <a
              href="#"
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src={tokopedia} alt="Tokopedia" />
            </a>
            <a
              href="#"
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src={traveloka} alt="traveloka" />
            </a>
          </div>
        </div>
      </div>
    </section>
    // <!-- Clients Section End -->
  );
};

export default Client;
