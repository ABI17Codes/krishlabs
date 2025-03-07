import React from "react";
import AchiveGoals from "../components/AchiveGoals";
import { Images } from "../assets/Images";
import Line from "../components/Line";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-fixed  text-white -mt-20"
        style={{ backgroundImage: `url(${Images.Image2})` }}
      >
        <div className="flex flex-col bg-[#022104]/70 justify-center items-center py-30 h-[50vh]">
          <h2 className="lg:text-6xl md:text-5xl text-4xl">Our Story</h2>
        </div>
      </div>
      <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:my-20 my-10 text-black/70">
        <div>
          <div className="flex lg:justify-center md:mt-20 ">
            <Line />
          </div>
          <div className="flex flex-col lg:items-center my-7">
            <p className="mb-5 lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-black lg:text-center">
              About Us
            </p>
            <p className="md:text-lg lg:w-2/3 lg:text-center">
              Welcome to Krishlabs, your trusted partner in digital
              transformation. Since our inception in 2019, we have been
              committed to delivering cutting-edge software solutions that
              empower businesses to thrive in an ever-evolving digital
              landscape.
            </p>
          </div>
        </div>
        <div className="border border-[#377A00]/20 md:mt-15 mt-10"></div>
        <div>
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
        <div className="border border-[#377A00]/20 md:mt-15 mt-10"></div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {/* <div> */}
          <div className="flex flex-col items-center border-2 border-[#377A00] px-6 py-4 hover:bg-[#2f6a00] hover:text-white hover:transition-all hover:duration-700 hover:ease-in-out w-full">
            <p className="mb-5 lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:text-center font-bold">
              Our Mission
            </p>
            <p className="md:text-lg lg:w-2/3 text-center">
              At Krishlabs, our mission is to harness technology to create
              innovative and efficient solutions tailored to businesses of all
              sizes. We specialize in mobile and web development, custom
              software solutions, digital marketing, and graphic design to help
              brands achieve their goals.
            </p>
          </div>
          {/* </div> */}
          {/* <div> */}
          <div className="flex flex-col items-center border-2 border-[#377A00] px-6 py-4 hover:bg-[#2f6a00] hover:text-white hover:transition-all hover:duration-700 hover:ease-in-out w-full">
            <p className="mb-5 lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:text-center font-bold">
              Our Vision
            </p>
            <p className="md:text-lg lg:w-2/3 text-center">
              As we continue to grow, Krishlabs remains dedicated to pushing
              technological boundaries. Our goal is to become a leading global
              tech solutions provider, helping businesses embrace digital
              transformation with confidence.
            </p>
          </div>
          {/* </div> */}
        </div>
        <div className="border border-[#377A00]/20 md:mt-15 mt-10"></div>
        <div className="md:mt-20 mt-10">
          <div className="flex justify-center">
            <Line />
          </div>
          <div>
            <p className="text-center md:my-15 my-10 lg:text-5xl md:text-4xl text-3xl text-black">
              Why Choose Krishlabs?
            </p>
            <div className="sm:text-lg md:flex justify-center items-start space-y-5 space-x-4">
              <p className="border-2 border-[#377A00] px-4 py-3 hover:bg-[#2f6a00] hover:text-white hover:transition-all hover:duration-700 hover:ease-in-out w-full">
                <span className="font-bold">✅ Expertise Across Domains</span> –
                From startups to established enterprises, we provide tailored
                solutions for diverse industries.
              </p>
              <p className="border-2 border-[#377A00] px-4 py-3 hover:bg-[#2f6a00] hover:text-white hover:transition-all hover:duration-700 hover:ease-in-out w-full">
                <span className="font-bold"> ✅ Client-Centric Approach</span> –
                We prioritize our clients' needs, ensuring every solution aligns
                with their business vision.
              </p>
              <p className="border-2 border-[#377A00] px-4 py-3 hover:bg-[#2f6a00] hover:text-white hover:transition-all hover:duration-700 hover:ease-in-out w-full">
                <span className="font-bold"> ✅ Innovation & Excellence</span> –
                We stay ahead of technology trends to deliver high-quality,
                scalable, and secure solutions.
              </p>
            </div>
            <div className="md:flex md:items-center md:justify-evenly text-center space-y-5  mt-12">
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
        <div className="grid lg:grid-cols-3 grid-cols-1 space-y-10 space-x-5 md:mt-20 mt-10">
          <div>
            <div className="flex justify-start">
              <Line />
            </div>
            <div>
              <h2 className="my-5 lg:text-5xl sm:text-4xl text-3xl text-black ">
                Krishna Patel
              </h2>
              <div className="flex items-center space-x-4 my-3">
                <Link to={"#"}>
                  <FaFacebook
                    size={22}
                    className="text-[#012104] hover:text-[#2f6a00]"
                  />
                </Link>
                <Link to={"#"}>
                  <FaSquareXTwitter
                    size={22}
                    className="text-[#012104] hover:text-[#2f6a00]"
                  />
                </Link>
                <Link to={"#"}>
                  <FaInstagram
                    size={22}
                    className="text-[#012104] hover:text-[#2f6a00]"
                  />
                </Link>
                <Link to={"#"}>
                  <FaYoutube
                    size={22}
                    className="text-[#012104] hover:text-[#2f6a00]"
                  />
                </Link>
                <Link to={"#"}>
                  <FaLinkedinIn
                    size={22}
                    className="text-[#012104] hover:text-[#2f6a00]"
                  />
                </Link>
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
