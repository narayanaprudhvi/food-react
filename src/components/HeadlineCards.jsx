import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2"> Through 8/26 </p>
          <button className="border rounded-xl px-5 py-1 border-white bg-white text-black mx-2 absolute mt-5">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/916904/pexels-photo-916904.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="eggs"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurents</p>
          <p className="px-2"> Added Daily </p>
          <button className="border rounded-xl px-5 py-1 border-white bg-white text-black mx-2 absolute mt-5">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="restaurants"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            {" "}
            We Deliver Desserts Too{" "}
          </p>
          <p className="px-2"> Tasty Treats </p>
          <button className="border rounded-xl px-5 py-1 border-white bg-white text-black mx-2 absolute mt-5">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="deserts"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
