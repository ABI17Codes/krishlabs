import React from "react";
import AchiveGoals from "../components/AchiveGoals";
import { Images, socialmedia } from "../assets/Images";
import Line from "../components/Line";

const About = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center text-white -mt-20"
        style={{ backgroundImage: `url(${Images.Image2})` }}
      >
        <div className="flex flex-col bg-[#022104]/70 justify-center items-center py-30 h-[50vh]">
          <h2 className="lg:text-6xl md:text-5xl text-4xl">Our Story</h2>
        </div>
      </div>
      <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:my-20 my-10 text-black/70">
        <div className="flex lg:justify-center md:mt-20 ">
          <Line />
        </div>
        <div className="flex flex-col lg:items-center my-7">
          <p className="mb-5 lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-black lg:text-center">
            Celebrating 10 Years of Excellence
          </p>
          <p className="md:text-lg lg:w-2/3 lg:text-center">
            Krishlabs is a leading software development company dedicated to
            delivering innovative solutions tailored to our clients’ needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-30 md:gap-x-10 space-y-5 md:text-lg mt-10 font-light">
          <div className="space-y-5">
            <p>
              Founded in 2013, Krishlabs started with a vision to revolutionize
              software development by providing cutting-edge technology and
              exceptional service to businesses around the globe.
            </p>
            <img
              className="rounded-lg w-full"
              src={Images.Image4}
              alt="Image4"
            />
          </div>
          <div className="space-y-5">
            <img
              className="rounded-lg w-full"
              src={Images.Image3}
              alt="Image3"
            />
            <p>
              Over the years, we have proudly served a diverse range of clients,
              including startups, SMEs, and Fortune 500 companies, empowering
              them through technology.
            </p>
            <p>
              Krishlabs has been recognized with multiple awards for excellence
              in software development, underscoring our commitment to quality
              and innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:my-20 my-10 text-black/70">
        <div className="grid lg:grid-cols-3 grid-cols-1 space-y-10 space-x-5">
          <div>
            <div className="flex justify-start">
              <Line />
            </div>
            <div>
              <h2 className="my-5 lg:text-5xl sm:text-4xl text-3xl text-black ">Krishna Patel</h2>
              <div className="flex items-center space-x-4 my-3">
                <img
                  className="cursor-pointer"
                  src={socialmedia.facebook}
                  alt="facebook"
                />
                <img className="cursor-pointer" src={socialmedia.x} alt="x" />
                <img
                  className="cursor-pointer"
                  src={socialmedia.instagram}
                  alt="instagram"
                />
                <img
                  className="cursor-pointer"
                  src={socialmedia.linkedin}
                  alt="linkedin"
                />
                <img
                  className="cursor-pointer"
                  src={socialmedia.youtube}
                  alt="youtube"
                />
              </div>
            </div>
          </div>
          <div className="md:text-lg md:space-y-5 font-light">
            <p>
              Krishna Patel is an experienced entrepreneur and visionary leader
              with over a decade of expertise in the technology sector. His
              passion for innovation drives the company’s forward momentum.
            </p>
            <p>
              Beginning with a small team and a dream, Krishna leveraged his
              skills and determination to grow Krishlabs into a reputable name
              in the software industry.
            </p>
          </div>
          <div>
            <img
              className="rounded-lg w-full"
              src={Images.Image1}
              alt="Image3"
            />
          </div>
        </div>
      </div>
      <AchiveGoals />
    </div>
  );
};

export default About;
