import React from "react";
import { Images } from "../assets/Images";
import Line from "./Line";
import { Link } from "react-router-dom";

const AchiveGoals = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center w-full h-auto text-white"
        style={{ backgroundImage: `url(${Images.Image3})` }}
      >
        <div className="flex flex-col bg-[#022104]/60">
          <div className="flex justify-center md:mt-20 mt-10">
          <Line color="#377A00" />
          </div>
          <div className="text-center mt-4 mb-15">
            <p className="my-2 lg:text-4xl md:text-3xl text-2xl">
              Let Us Help You Achieve Your Goals
            </p>
            <Link to={"/contact"}>
              <button className="px-6 py-4 bg-[#377A00] hover:bg-[#2f6a00] text-white my-3 cursor-pointer">
                GET STARTED
              </button>
            </Link>
            <p className="my-2 lg:text-2xl md:text-xl text-lg">OR</p>
            <div className="flex justify-center my-3 lg:text-3xl md:text-2xl text-xl">
              <p>Call:</p>
              <a href="tel:+91 95500 83889">+91 95500 83889</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchiveGoals;
