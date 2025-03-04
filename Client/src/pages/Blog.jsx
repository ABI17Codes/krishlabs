import React from "react";
import { Images } from "../assets/Images";

const Blog = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center text-white -mt-20"
        style={{ backgroundImage: `url(${Images.Image2})` }}
      >
        <div className="flex flex-col bg-[#022104]/60 justify-center items-center py-30 h-[60vh]">
          <h2 className="lg:text-6xl md:text-5xl text-center text-4xl">Insights \u0026 Updates</h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
