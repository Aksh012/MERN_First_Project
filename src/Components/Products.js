import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import list from "./list.json";
import Cards from "./Cards";

function Products() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className=" mt-28 text-center justify-center items-center">
          <h1 className="text-xl font-bold md:text-4xl">
            <span className=" text-yellow-500">Thank You For Login</span>: There
            are all product you need
          </h1>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((items) => (
            <Cards items={items} key={items.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
