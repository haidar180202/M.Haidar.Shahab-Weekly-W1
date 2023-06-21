import React from "react";

const Blog = () => {
  return (
    // <!-- Blog Section Start -->
    <section id="blog" className="bg-slate-100 pt-36 pb-32 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Blog</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Recent Posts
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quisquam perspiciatis blanditiis dolores?
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
              <img
                src="https://source.unsplash.com/360x200?programming"
                alt="Programming"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white"
                  >
                    Programming Learning Tips
                  </a>
                </h3>
                <p className="mb-6 text-base font-medium text-secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
              <img
                src="https://source.unsplash.com/360x200?mechanical+keyboard"
                alt="Mechanical Keyboard"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white"
                  >
                    Review Keyboard GMMK Pro
                  </a>
                </h3>
                <p className="mb-6 text-base font-medium text-secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  facilis illum in.
                </p>
                <a
                  href="#"
                  className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
              <img
                src="https://source.unsplash.com/360x200?coffee"
                alt="Coffee"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white"
                  >
                    Enjoying a Cup of Coffee
                  </a>
                </h3>
                <p className="mb-6 text-base font-medium text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- Blog Section End -->
  );
};

export default Blog;
