import React from "react";

function Cards({ items }) {
  console.log(items);
  return (
    <>
      <div className="p-3">
        <div className=" cursor-pointer card w-92  bg-base-300 shadow-xl my-7 hover:scale-105 duration-200">
          <figure>
            <img src={items.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {items.name}
              <div className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                {items.catogries}
              </div>
            </h2>
            <p>{items.title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline cursor-pointer">₹ {items.price}</div>
              <div className="badge badge-outline cursor-pointer">BUY NOW</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
