import React from "react";
import banner from "../img/banner.jpg";

function Banner() {
  return (
    <div className=" my-10 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
      <div className="left w-full md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold">
            Hello <span className="text-yellow-500">Pet Parents!!</span>, Your
            search for pets product ends here
          </h1>

          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque
            voluptas porro, animi ad, odit ea ipsum iste tempore magni est at ut
            distinctio soluta provident natus quos sunt. Nesciunt!
          </p>
        </div>
      </div>
      <div className="right  mt-5 ml-7 md:mt-20 md:ml-20 w-full md:w-1/2">
        <img src={banner} className="w-50 h-80" alt="" />
      </div>
    </div>
  );
}

export default Banner;
