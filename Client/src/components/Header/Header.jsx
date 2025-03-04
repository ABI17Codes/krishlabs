import React from "react";
import { Images } from "../../assets/Images";
import { Link } from "react-router-dom";
import Line from "../Line";

const Header = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center w-full text-white -mt-30"
        style={{ backgroundImage: `url(${Images.Image1})` }}
      >
        <div className="flex flex-col justify-center items-center h-[100vh] bg-[#022104]/70 space-y-5">
          <div className="flex justify-center md:my-10 mt-20">
            <Line />
          </div>
          <h1 className="lg:text-5xl text-4xl leading-15 text-center">
            Transforming Ideas into Innovative <br /> Solutions
          </h1>
          <p className="md:text-xl text-lg text-center">
            Empowering your business with cutting-edge technology.
          </p>
          <div>
            <Link to={"/contact"}>
              <button className="px-5 py-3 bg-[#377A00] hover:bg-[#2f6a00] cursor-pointer hover:text-white hover:transition-all hover:duration-500 hover:ease-in-out">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
