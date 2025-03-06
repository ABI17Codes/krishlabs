import React from "react";
import Offer from "../components/Offerings/Offer";
import Line from "../components/Line";
import { Images } from "../assets/Images";
import AchiveGoals from "../components/AchiveGoals";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Offering = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-fixed  text-white -mt-20"
        style={{ backgroundImage: `url(${Images.Image2})` }}
      >
        <div className="flex flex-col bg-[#022104]/60 justify-center items-center py-30 h-[60vh]">
          <h2 className="lg:text-6xl md:text-5xl text-4xl">Our Key Services</h2>
        </div>
      </div>
      <div className="md:mt-20 mt-10">
        <div className="flex justify-center">
          <Line />
        </div>
        <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:mt-15 mt-10 ">
          <p className="text-center md:my-15 my-10 lg:text-5xl md:text-4xl text-3xl text-black">
            Our Services | Krishlabs
          </p>
          <div className="flex justify-center">
            <p className="text-center text-lg md:w-2/3">
              At Krishlabs, we provide cutting-edge software solutions to help
              businesses thrive in the digital world. From mobile and web
              development to custom software, digital marketing, and graphic
              design, we offer a full range of services tailored to your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="border border-[#377A00]/20 md:mt-15 mt-10"></div>
      <div className=" md:mt-20 mt-10">
        <div className="flex justify-center">
          <Line />
        </div>
        <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:mt-20 mt-10">
          <p className="text-center md:my-15 my-10 lg:text-5xl md:text-4xl text-3xl text-black">
            Explore Our Expertise
          </p>
          <Offer />
        </div>
      </div>
      <div className="border border-[#377A00]/20 md:mt-15 mt-10"></div>
      <div className=" md:mt-20 mt-10">
        <div className="flex justify-center">
          <Line />
        </div>
        <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:my-15 my-10 ">
          <p className="text-center md:my-15 my-10 lg:text-5xl md:text-4xl text-3xl text-black">
            Why Choose Krishlabs?
          </p>
          <div className="sm:text-lg md:flex justify-center items-start space-y-5 space-x-4">
            <p className="border-2 border-[#377A00] px-4 py-3 hover:bg-[#2f6a00] hover:text-white hover:transition-all hover:duration-700 hover:ease-in-out w-full">
              ✅ Expertise Across Industries – We serve startups, SMEs, and
              enterprises.
            </p>
            <p className="border-2 border-[#377A00] px-4 py-3 hover:bg-[#2f6a00] hover:text-white hover:transition-all hover:duration-700 hover:ease-in-out w-full">
              ✅ Innovative & Scalable Solutions – Future-proof technology for
              long-term growth.
            </p>
            <p className="border-2 border-[#377A00] px-4 py-3 hover:bg-[#2f6a00] hover:text-white hover:transition-all hover:duration-700 hover:ease-in-out w-full">
              ✅ Client-Centric Approach – We tailor our services to meet your
              business goals.
            </p>
          </div>
          <div className="sm:flex sm:items-center sm:justify-evenly text-center space-y-5  mt-12">
            <p className="lg:text-3xl md:text-2xl text-xl">
              🚀 Let’s build the future together!
            </p>
            <div className="flex items-center justify-center">
              <Link to={"/contact"}>
                <button className="p-4 cursor-pointer flex  items-center font-medium text-[#377A00] border-2 border-[#377A00] hover:bg-[#2f6a00] hover:text-white hover:transition-all hover:duration-500 hover:ease-in-out">
                  📩 Contact Us Today
                  <ArrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AchiveGoals />
    </div>
  );
};

export default Offering;
