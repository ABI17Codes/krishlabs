import React from "react";
import Offer from "../components/Offerings/Offer";
import Line from "../components/Line";
import { Images } from "../assets/Images";
import AchiveGoals from "../components/AchiveGoals";

const Offering = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center text-white -mt-20"
        style={{ backgroundImage: `url(${Images.Image2})` }}
      >
        <div className="flex flex-col bg-[#022104]/60 justify-center items-center py-30 h-[60vh]">
          <h2 className="lg:text-6xl md:text-5xl text-4xl">Our Key Services</h2>
        </div>
      </div>
      <div className="flex justify-center md:mt-25 mt-15">
        <Line />
      </div>
      <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:my-20 my-10 ">
        <p className="text-center md:my-15 my-10 lg:text-5xl md:text-4xl text-3xl text-black">
          Explore Our Expertise
        </p>
        <Offer />
      </div>
      <AchiveGoals />
    </div>
  );
};

export default Offering;
