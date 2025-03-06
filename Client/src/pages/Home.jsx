import React from "react";
import Header from "../components/Header/Header";
import { Images } from "../assets/Images";
import Offer from "../components/Offerings/Offer";
import Line from "../components/Line";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AchiveGoals from "../components/AchiveGoals";

const Home = () => {
  return (
    <div>
      <Header />
      {/* Our Journey and Vision */}
      <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:mt-20 mt-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 space-x-10 space-y-5">
          <div>
            <img
              className="w-full"
              // -mt-8 mb-6 -ml-6 bg-[#2f6a00]/30 rounded-xl
              src={`${Images.Image2}`}
              alt="Image2"
            />
          </div>
          <div>
            <div className="flex justify-start">
              <Line />
            </div>
            <p className="my-5 lg:text-4xl md:text-3xl text-2xl text-black">
              Our Journey and Vision
            </p>
            <div className="text-black/70 space-y-5 md:text-lg font-light">
              <p>
                At Krishlabs, we are dedicated to delivering exceptional
                software development services. Our expertise spans various
                technologies and industries, making us a reliable partner for
                businesses.
              </p>
              <p>
                Krishlabs was founded with a vision to revolutionize the
                software development landscape. Our journey began with a group
                of passionate developers seeking to create impactful solutions.
              </p>
            </div>
            <div className="mt-5">
              <Link to={"/about"}>
                <button className="text-[#377A00] cursor-pointer flex items-center font-medium">
                  READ MORE
                  <ArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Offerings */}
      <div className="bg-[#eaf7eb]">
        <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:mt-20 mt-10">
          <div className="flex justify-start md:pt-20 pt-10">
            <Line />
          </div>
          <p className="mt-5 lg:text-4xl md:text-3xl text-2xl text-black">
            Our Core Offerings
          </p>
          <p className="mt-5 font-light md:text-xl lg:w-2/4 sm:w-3/4">
            Explore our wide range of software development services tailored to
            meet your business needs.
          </p>
          <div>
            <Offer />
          </div>
        </div>
        {/* Ready to Start Your Project */}
        <div className="md:mt-20 mt-10">
          <div className="border border-[#377A00]/20"></div>
          <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 py-15">
            <div className="sm:flex sm:items-center sm:justify-between text-center space-y-5">
              <p className="lg:text-3xl md:text-2xl text-xl">
                Ready to Start Your Project?
              </p>
              <div>
                <Link to={"/contact"}>
                  <button className="px-6 py-4 bg-[#377A00] hover:bg-[#2f6a00] cursor-pointer text-white hover:transition-all hover:duration-500 hover:ease-in-out">
                    GET STARTED
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Personalized Consultation Services */}
      <div className="bg-[#011502] text-white">
        <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:py-20 py-10">
          <div className="flex justify-center mt-10">
            <Line />
          </div>
          <div className="flex flex-col items-center mt-7">
            <p className="mb-5 lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center">
              Personalized Consultation Services
            </p>
            <p className="md:text-lg text-center text-white/80 mt-3">
              Our team offers tailored consultations to guide you through your
              software development journey.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:space-x-15 mt-15 space-y-8">
            <div className="space-y-10">
              <div>
                <p className="font-bold md:text-2xl text-xl">
                  Business Analysis
                </p>
                <p className="font-light  mt-3 text-white/80">
                  In-depth analysis to understand your unique business
                  requirements.
                </p>
                <div className="border border-white/80 w-full mt-5"></div>
              </div>
              <div>
                <p className="font-bold md:text-2xl text-xl">
                  Technical Architecture
                </p>
                <p className="font-light mt-3 text-white/80">
                  Creating robust architectures to ensure scalable and efficient
                  solutions.
                </p>
                <div className="border border-white/80 w-full mt-5"></div>
              </div>
              <div>
                <p className="font-bold md:text-2xl text-xl">
                  Project Management
                </p>
                <p className="font-light mt-3 text-white/80">
                  Expert project management to keep your projects on track and
                  within budget.
                </p>
                <div className="border border-white/80 w-full mt-6"></div>
              </div>
              <div>
                <p className="font-bold md:text-2xl text-xl">
                  Quality Assurance
                </p>
                <p className="font-light mt-3 text-white/80">
                  Comprehensive testing services to ensure high-quality
                  deliverables.
                </p>
              </div>
            </div>
            <div className="w-full ">
              <img src={Images.Image5} alt="Image4" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Development Process */}
      <div className="bg-[#eaf7eb]">
        <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:pt-20 pt-10">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div>
              <div className="flex justify-start">
                <Line />
              </div>
              <p className="my-5 lg:text-4xl md:text-3xl text-2xl text-black">
                Our Development Process
              </p>
            </div>
            <div>
              <p className="font-light text-lg">
                Learn about our structured approach to delivering exceptional
                software solutions.
              </p>
            </div>
          </div>
          <div className="border border-[#377A00]/20 mt-10"></div>
          <div className="grid lg:grid-cols-3 grid-cols-1 space-x-10 py-5">
            <div className="lg:py-15 py-5 space-y-3">
              <p className="text-[#377A00] text-xl">01</p>
              <p className="text-3xl">Discovery Phase</p>
              <p className="font-light text-lg">
                We collaborate with you to gather requirements and understand
                your vision.
              </p>
            </div>
            <div className="lg:py-15 py-5 space-y-3">
              <p className="text-[#377A00] text-xl">02</p>
              <p className="text-3xl">Design Stage</p>
              <p className="font-light text-lg">
                Our team designs intuitive interfaces and user experiences
                tailored to your needs.
              </p>
            </div>
            <div className="lg:py-15 py-5 space-y-3">
              <p className="text-[#377A00] text-xl">03</p>
              <p className="text-3xl">Development& Testing</p>
              <p className="font-light text-lg">
                We develop the solution while integrating thorough testing to
                ensure quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Clients Say */}
      <div>
        <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:py-20 py-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 space-y-10">
            <div className="">
              <div className="flex justify-start">
                <Line />
              </div>
              <p className="my-5 lg:text-4xl md:text-3xl text-2xl text-black">
                What Clients Say
              </p>
              <p className="font-light">Hear from our satisfied customers.</p>
            </div>
            <div>
              <div>
                <img src={Images.Image6} alt="Image6" />
                <p className="font-light text-lg my-10">
                  Krishlabs transformed our vision into reality with their
                  exceptional services. Their professionalism and expertise are
                  unmatched in the industry.
                </p>
                <div className="flex items-center justify-start space-x-3">
                  <img src={Images.Image7} alt="Image7" />
                  <p className="font-light text-lg ">John Smith</p>
                </div>
              </div>
              <div className="border border-[#377A00]/20 my-10"></div>

              <div>
                <img src={Images.Image6} alt="Image6" />
                <p className="font-light text-lg my-10">
                  Working with Krishlabs has been a game-changer for our
                  business. Their dedication to quality and service is truly
                  commendable.
                </p>
                <div className="flex items-center justify-start space-x-3">
                  <img src={Images.Image8} alt="Image8" />
                  <p className="font-light text-lg ">Emily Johnson</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AchiveGoals />
    </div>
  );
};

export default Home;
