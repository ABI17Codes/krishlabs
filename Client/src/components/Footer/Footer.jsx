import React from "react";
import BackToTop from "../BackToTop";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#011502] lg:px-30 md:px-20 sm:px-10 px-5 md:py-15 py-10 text-white">
        <div className="grid lg:grid-cols-4 grid-cols-1 space-y-10">
          <div className="lg:col-span-2">
            <p className="md:text-2xl text-xl">About</p>
            <p className="mt-3 lg:w-5/6">
              Founded by experts, Krishlabs excels in delivering innovative
              software solutions to clients worldwide.
            </p>
          </div>
          <div>
            <p className="md:text-2xl text-xl">Contact</p>
            <p className="mt-3">
              <a href="mailto:hello@krishlabs.in">hello@krishlabs.in</a>
            </p>
            <p className="mt-3">
              <a href="tel:+91 9550083889">+9195500 83889</a>
            </p>
          </div>
          <div>
            <p className="md:text-2xl text-xl">Address</p>
            <p className="mt-3">
              #26-4-866, Ground Floor, Beside Shilpa Hospital, Hindupur, AP -
              515 201
            </p>
          </div>
        </div>
      </div>
      <BackToTop />
      <div className="text-center bg-[#011502] text-white border-t p-10">
        <p className="md:text-lg">
          Copyright © {new Date().getFullYear()} krishlabs
        </p>
      </div>
    </div>
  );
};

export default Footer;
