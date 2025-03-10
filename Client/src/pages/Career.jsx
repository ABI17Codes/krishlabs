import React, { useEffect } from "react";
import { Images } from "../assets/Images";
import { FaLightbulb } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import Line from "../components/Line";
import { FaCode } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

const whyCareerWithUs = [
  {
    id: 1,
    title: "Innovative Projects",
    content: "Work on cutting-edge technologies in mobile, web, AI, and SaaS.",
    icon: <FaLightbulb />,
  },
  {
    id: 2,
    title: "Career Growth",
    content:
      "Upskill with training, mentorship, and professional development programs.",
    icon: <BsGraphUpArrow />,
  },
  {
    id: 3,
    title: "Work-Life Balance",
    content: "We promote a flexible and inclusive work environment.",
    icon: <FaBalanceScale />,
  },
  {
    id: 4,
    title: "Collaborative Culture",
    content: "Join a team that values creativity, teamwork, and innovation.",
    icon: <MdGroups />,
  },
];

const Career = () => {

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
            Careers at Krishlabs
          </h2>
        </div>
      </div>
      <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:mt-20 mt-10">
        <div className="flex flex-col items-center mt-20">
          <p className="md:text-4xl sm:text-3xl text-2xl text-center">
            Join Our Team & Build the Future of Technology!
          </p>
          <p className="md:text-lg lg:w-2/3 md:w-3/4 text-center text-black/70 mt-10">
            At <span className="font-bold text-black">Krishlabs</span>, we are
            passionate about{" "}
            <span className="font-bold text-black">
              innovation, creativity, and problem-solving.
            </span>{" "}
            We believe in building world-class{" "}
            <span className="font-bold text-black">software solutions</span>{" "}
            while fostering a culture of{" "}
            <span className="font-bold text-black">
              growth, learning, and teamwork.
            </span>{" "}
            If you’re looking for a place where your ideas matter and your
            skills can thrive, Krishlabs is the perfect place for you!
          </p>
        </div>
        <div className="mt-25">
          <p className="mb-5 lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center">
            🌟 Why Work With Us?
          </p>
          <div className="flex justify-center mt-7">
            <Line color="#0066FF" />
          </div>
          <div className="flex items-start justify-center flex-wrap space-x-5">
            {whyCareerWithUs.map((career, id) => (
              <div
                key={id}
                className="flex flex-col justify-start items-center mt-10 space-y-3 md:w-56 w-full bg-blue-100/30 px-5 py-10"
              >
                <p className="text-[#0066FF] text-4xl">{career.icon}</p>
                <p className="text-[#002855] font-bold text-xl text-center">
                  {career.title}
                </p>
                <p className="text-center font-light">{career.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-blue-100/30 mt-20 py-10">
        <div className="lg:px-35 md:px-25 sm:px-10 px-5 md:py-20 py-10">
          <p className="mb-5 lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center">
            🚀 Open Positions
          </p>
          <div className="flex justify-center mt-7">
            <Line color="#0066FF" />
          </div>
          <div className="flex flex-wrap justify-center mt-10 gap-10">
            <div className="bg-white rounded-2xl overflow-hidden sm:w-96 w-full">
              <div className="bg-[#377A00] text-white px-4 py-5">
                <p className="text-2xl">📌 Software Developer (Web & Mobile)</p>
              </div>
              <div className="flex flex-col p-8 space-y-3 font-light">
                <div className="flex items-center gap-2">
                  <MdWork color="#0066FF" size={20} />
                  <p>Experience: 1+ years</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCode color="#0066FF" size={20} />
                  <p>Skills: JavaScript, React, Node.js, Flutter, Kotlin</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLocationDot color="0066FF" size={20} />
                  <p>Location: Remote/Hybrid</p>
                </div>
              </div>
              <div className="border border-[#EEEEEE]"></div>
              <div className="text-center my-5">
                <Link to="mailto:hello@krishlabs.in">
                  <button className="text-white bg-[#2f6a00] px-5 py-3 rounded-full font-bold cursor-pointer">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden sm:w-96 w-full">
              <div className="bg-[#377A00] text-white px-4 py-5">
                <p className="text-2xl">📌 UI/UX Designer </p>
              </div>
              <div className="flex flex-col p-8 space-y-3 font-light">
                <div className="flex items-center gap-2">
                  <MdWork color="#0066FF" size={20} />
                  <p>Experience: 1+ years</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCode color="#0066FF" size={20} />
                  <p>Skills: Figma, Adobe XD, Sketch, User Research </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLocationDot color="#0066FF" size={20} />
                  <p>Location: Remote</p>
                </div>
              </div>
              <div className="border border-[#EEEEEE]"></div>
              <div className="text-center my-5">
                <Link to="mailto:hello@krishlabs.in">
                  <button className="text-white bg-[#2f6a00] px-5 py-3 rounded-full font-bold cursor-pointer">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden sm:w-96 w-full">
              <div className="bg-[#377A00] text-white px-4 py-5">
                <p className="text-2xl">📌 Digital Marketing Specialist</p>
              </div>
              <div className="flex flex-col p-8 space-y-3 font-light">
                <div className="flex items-center gap-2">
                  <MdWork color="#0066FF" size={20} />
                  <p>Experience: 1-2 years</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCode color="#0066FF" size={20} />
                  <p>Skills: SEO, Google Ads, Social Media Marketing</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLocationDot color="#0066FF" size={20} />
                  <p>Location: Hybrid</p>
                </div>
              </div>
              <div className="border border-[#EEEEEE]"></div>
              <div className="text-center my-5">
                <Link to="mailto:hello@krishlabs.in">
                  <button className="text-white bg-[#2f6a00] px-5 py-3 rounded-full font-bold cursor-pointer">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden sm:w-96 w-full">
              <div className="bg-[#377A00] text-white px-4 py-5">
                <p className="text-2xl">📌 Graphic Designer</p>
              </div>
              <div className="flex flex-col p-8 space-y-3 font-light">
                <div className="flex items-center gap-2">
                  <MdWork color="#0066FF" size={20} />
                  <p>Experience: 1+ years</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCode color="#0066FF" size={20} />
                  <p>Skills: Photoshop, Illustrator, Motion Graphics</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLocationDot color="#0066FF" size={20} />
                  <p>Location: Remote</p>
                </div>
              </div>
              <div className="border border-[#EEEEEE]"></div>
              <div className="text-center my-5">
                <Link to="mailto:hello@krishlabs.in">
                  <button className="text-white bg-[#2f6a00] px-5 py-3 rounded-full font-bold cursor-pointer">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-35 md:px-25 sm:px-10 px-5 md:py-20 py-10 space-y-12">
        <div>
          <p className="lg:text-5xl md:text-4xl text-3xl text-center text-[#002855] font-bold space-y-10">
            💼 Internship Opportunities
          </p>
          <div className="flex justify-center mt-7">
            <Line color="#0066FF" />
          </div>
        </div>
        <p className="md:text-lg text-center font-light">
          Kickstart your career with{" "}
          <span className="font-bold">hands-on experience!</span> We offer
          internships in:
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <p className="bg-[#377A00] text-white px-5 py-3 rounded-full">
            🎯 Software Development
          </p>
          <p className="bg-[#377A00] text-white px-5 py-3 rounded-full">
            🎯 UI/UX Design
          </p>
          <p className="bg-[#377A00] text-white px-5 py-3 rounded-full">
            🎯 Digital Marketing
          </p>
          <p className="bg-[#377A00] text-white px-5 py-3 rounded-full">
            🎯 Business Development
          </p>
        </div>
      </div>
      <div className="bg-[#2f6a00] text-white">
        <div className="lg:px-35 md:px-25 sm:px-10 px-5 md:py-20 py-10 text-center space-y-10">
          <p className="lg:text-5xl md:text-4xl text-3xl font-bold">
            🚀 Join Us Today!
          </p>
          <p className="md:text-lg font-light">
            Be a part of an{" "}
            <span className="font-bold">
              exciting, fast-growing tech company{" "}
            </span>
            and shape the future with us.
          </p>
          <button className="border-2 border-white text-white px-5 py-3 rounded-full cursor-pointer font-bold">
            <Link to="mailto:hello@krishlabs.in">Apply Now</Link>
          </button>
          <p className="md:text-lg font-light">
            send your resume to{" "}
            <span className="font-bold">
              <Link to="mailto:hello@krishlabs.in">hello@krishlabs.in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
