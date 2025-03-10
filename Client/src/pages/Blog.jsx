import React, { useEffect } from "react";
import { Images } from "../assets/Images";
import { Link } from "react-router-dom";

const Blog = () => {

 
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div>
      <div
        className="bg-cover bg-center bg-fixed text-white -mt-20"
        style={{ backgroundImage: `url(${Images.Image2})` }}
      >
        <div className="flex flex-col bg-[#022104]/60 justify-center items-center py-30 h-[60vh]">
          <h2 className="lg:text-6xl md:text-5xl text-center text-4xl  md:leading-20 leading-14">
            Insights \u0026 <br /> Updates
          </h2>
        </div>
      </div>
      <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:my-20 my-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-x-5">
          <div>
            <Link to={"/blog/:id"}>
              <div className="cursor-pointer w-full">
                <img
                  className="object-cover transition duration-500 hover:scale-110"
                  src={Images.Image3}
                  alt="Image3"
                />
              </div>
              <p className="md:text-xl text-lg font-bold mt-3">
                Crafting Captivating Headlines: Your awesome post title goes
                here
              </p>
              <p className="mt-3">JAN 24,2025</p>
              <p className="mt-3 text-black/70">
                Engaging Introductions: Capturing Your Audience’s Interest The
                initial impression your blog post makes is crucial, and that’s
                where your introduction comes into play.
              </p>
            </Link>
          </div>
          <div>
            <Link to={"/blog/:id"}>
              <div className="cursor-pointer w-full">
                <img
                  className="object-cover transition duration-500 hover:scale-110"
                  src={Images.Image3}
                  alt="Image3"
                />
              </div>
              <p className="md:text-xl text-lg font-bold mt-3">
                Crafting Captivating Headlines: Your awesome post title goes
                here
              </p>
              <p className="mt-3">JAN 24,2025</p>
              <p className="mt-3 text-black/70">
                Engaging Introductions: Capturing Your Audience’s Interest The
                initial impression your blog post makes is crucial, and that’s
                where your introduction comes into play.
              </p>
            </Link>
          </div>
          <div>
            <Link to={"/blog/:id"}>
              <div className="cursor-pointer w-full">
                <img
                  className="object-cover transition duration-500 hover:scale-110"
                  src={Images.Image3}
                  alt="Image3"
                />
              </div>
              <p className="md:text-xl text-lg font-bold mt-3">
                Crafting Captivating Headlines: Your awesome post title goes
                here
              </p>
              <p className="mt-3">JAN 24,2025</p>
              <p className="mt-3 text-black/70">
                Engaging Introductions: Capturing Your Audience’s Interest The
                initial impression your blog post makes is crucial, and that’s
                where your introduction comes into play.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
