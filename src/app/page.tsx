import React from "react";

const homePage = () => {
  return (
    <div className="md:max-w-3xl max-w-[450px] mx-auto p-5">
      <div className="grid md:grid-cols-2 bg-dark_desaturated_blue shadow-md rounded-lg">
        <div className="text-white">
          <img
            src="/images/image-header-mobile.jpg"
            alt="image-header-mobile"
            className="md:hidden object-cover rounded-t-lg "
          />
          <div>
            <h1 className="text-3xl font-bold p-5">
              Get <span className="text-soft_violet">insights</span> that help
              your business grow.
            </h1>
            <p className="p-5">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div className="p-5">
              <div className="flex flex-row justify-between items-center">
                <div className="mr-2">
                  <h2 className="text-3xl font-bold">10k+</h2>
                  <p className="text-sm">companies</p>
                </div>
                <div className="mr-2">
                  <h2 className="text-3xl font-bold">314</h2>
                  <p className="text-sm">templates</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">12m+</h2>
                  <p className="text-sm">queries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex  md:h-auto">
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
