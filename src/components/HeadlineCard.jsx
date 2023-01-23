import React from "react";

const HeadlineCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6">
      {/* Card*/}
      <div className="rounded-all relative">
        {/* Overlay*/}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sam's Out, Bogo's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg" alt="" />
      </div>

      {/* Card*/}
      <div className="rounded-all relative">
        {/* Overlay*/}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sam's Out, Bogo's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg" alt="" />
      </div>

      {/* Card*/}
      <div className="rounded-all relative">
        {/* Overlay*/}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Deserts Too</p>
          <p className="px-2">Joseph Feussi</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg" alt="" />
      </div>
    </div>

    
  );
};

export default HeadlineCard;
