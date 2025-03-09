import React from "react";
import BackToTop from "../BackToTop";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#011502] lg:px-30 md:px-20 sm:px-10 px-5 md:py-15 py-10 text-white">
        <div className="grid lg:grid-cols-4 grid-cols-1 space-y-10">
          <div className="lg:col-span-2">
            <Link to={"/"} className="md:text-2xl text-xl">
              Krishlabs
            </Link>
            <p className="mt-3 lg:w-5/6">
              Founded by experts, Krishlabs excels in delivering innovative
              software solutions to clients worldwide.
            </p>
          </div>
          <div>
            <p className="md:text-2xl text-xl">COMPANY</p>
            <div className="flex flex-col justify-start items-start gap-3 mt-3">
              <Link>Blog</Link>
              <Link to={'/career'}>Careers</Link>
              <Link>Pricing</Link>
            </div>
          </div>
          <div>
            <p className="md:text-2xl text-xl">LEGAL</p>
            <div className="flex flex-col justify-start items-start gap-3 mt-3">
              <Link>Terms of Service</Link>
              <Link>Privacy Policy</Link>
              <Link>Cookies Policy</Link>
              <Link>Data Processing</Link>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
      <div className="bg-[#011502] text-white border-t md:p-10 p-5">
        <div className="sm:flex justify-between items-center gap-3 mt-3">
          <div>
            <p className="md:text-lg">
              © {new Date().getFullYear()} krishlabs. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Link to={"#"}>
              <FaFacebook
                size={22}
                className="hover:text-[#2f6a00]"
              />
            </Link>
            <Link to={"#"}>
              <FaSquareXTwitter
                size={22}
                className="hover:text-[#2f6a00]"
              />
            </Link>
            <Link to={"#"}>
              <FaInstagram
                size={22}
                className="hover:text-[#2f6a00]"
              />
            </Link>
            <Link to={"#"}>
              <FaYoutube
                size={22}
                className="hover:text-[#2f6a00]"
              />
            </Link>
            <Link to={"#"}>
              <FaLinkedinIn
                size={22}
                className="hover:text-[#2f6a00]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
