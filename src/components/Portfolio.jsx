import React from "react";
import emart from "../assets/images/projectimage/emartreact.png";
import noteapp from "../assets/images/projectimage/noteapp.png";
import pokeapp from "../assets/images/projectimage/pokeapp.png";
import imdbclone from "../assets/images/projectimage/imdbclone.png";

function Portfolio() {
  return (
    //  Portfolio
    <section
      id="portfolio"
      className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">
              Portfolio
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Projects Have Created
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg">
              The web applications have been created with simple and specific
              section data, and use the reusable concept in react to build the
              app with the great performance
            </p>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <a href="https://noteapp-ruby.vercel.app/">
                <img src={noteapp} alt="E-Commerce" width="w-full" />
              </a>
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              note-app
            </h3>
            <p className="text-base font-medium text-secondary">
              simply react application with dummy data and implement about
              function and className component to create the application and
              share data for components with props
            </p>
          </div>

          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <a href="https://emartreact.vercel.app/">
                <img src={emart} alt="Landing Page" width="w-full" />
              </a>
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              emart-react
            </h3>
            <p className="text-base font-medium text-secondary">
              Cart simulation in e-commerce app -&gt; crud simulation and get
              API with restful methods with axios and implementation simply
              management state with redux
            </p>
          </div>

          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <a href="https://tmdb-app-eight.vercel.app/">
                <img
                  src={imdbclone}
                  alt="Technical Documentation"
                  width="w-full"
                />
              </a>
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              imdb-clone-design
            </h3>
            <p className="text-base font-medium text-secondary">
              implement data manipulation in react with the restful method in
              tmdb db API and use access with restful fetch method
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <a href="https://pokeapp-opal.vercel.app/">
                <img src={pokeapp} alt="Tribute Page" width="w-full" />
              </a>
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              pokeapp
            </h3>
            <p className="text-base font-medium text-secondary">
              Pokemon Application app -&gt; crud simulation and get API with
              restful methods with axios and implementation management state
              with redux and implement the great user interface and use the
              middleware redux to implement the application, and this app is the
              developing now
            </p>
          </div>
        </div>
      </div>
    </section>
    // <!-- Portfolio Section End -->
  );
}

export default Portfolio;
