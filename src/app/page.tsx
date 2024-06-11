import React from "react";

const homePage = () => {
  return (
    <div className="max-w-[440px] md:max-w-[1080px] mx-auto p-5">
      <div className="grid md:grid-cols-2 bg-dark_desaturated_blue shadow-md rounded-lg">
        <div className="text-white">
          <div className="md:hidden absolute bg-soft_violet opacity-60 contrast-150 brightness-[0.6] rounded-t-lg w-[400px] h-[295px]" />
          <div>
            {/* add color on image */}
            <img
              src="/images/image-header-mobile.jpg"
              alt="image-header-mobile"
              className="md:hidden object-cover rounded-t-lg  "
            />
          </div>
          <div className="px-10 pt-10 pb-6 text-center md:text-left md:p-10 md:mr-10">
            <h1 className="text-[32px] font-bold pb-4">
              Get <span className="text-soft_violet">insights</span> that help
              your business grow.
            </h1>
            <p className="pb-8 md:pt-2 md:pb-14 opacity-60 text-lg md:text-base">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="py-2">
                <h2 className="text-3xl font-bold">10k+</h2>
                <p className="py-1 text-sm font-lexend-deca  tracking-widest opacity-60">
                  COMPANIES
                </p>
              </div>
              <div className="mr-4 py-2">
                <h2 className="text-3xl font-bold">314</h2>
                <p className="py-1 text-sm font-lexend-deca tracking-widest opacity-60">
                  TEMPLATE
                </p>
              </div>
              <div className="mr-4 py-2">
                <h2 className="text-3xl font-bold">12M+</h2>
                <p className="py-1 text-sm font-lexend-deca tracking-widest opacity-60">
                  QUERIES
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex md:h-auto">
          {/* add color on image */}
          <div className="absolute bg-soft_violet w-full h-full opacity-60 contrast-150 brightness-[0.6] rounded-r-lg" />
          <img
            src="/images/image-header-desktop.jpg"
            alt="image-header-desktop"
            className="hidden md:block object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default homePage;

/*  Get insights that help your business grow.

  Discover the benefits of data analytics and make better decisions regarding revenue, customer 
  experience, and overall efficiency.

  10k+ companies
  314 templates
  12m+ queries
  
  */
