import React from "react";
import Line from "../components/Line";
import { Images, socialmedia } from "../assets/Images";
import AchiveGoals from "../components/AchiveGoals";

const Contact = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center text-white -mt-20"
        style={{ backgroundImage: `url(${Images.Image1})` }}
      >
        <div className="flex flex-col bg-[#022104]/70 justify-center items-center py-30 h-[50vh]">
          <h2 className="lg:text-6xl md:text-5xl text-4xl">Get in Touch</h2>
        </div>
      </div>
      <div className="flex justify-center md:mt-25 mt-15">
        <Line />
      </div>
      <div className="lg:mx-35 md:mx-25 sm:mx-10 mx-5 md:my-20 my-10 text-black/70">
        <p className="text-center md:my-15 my-10 lg:text-5xl md:text-4xl text-3xl text-black">
          We’d Love to Hear From You
        </p>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <form action="#">
            <div className="lg:w-11/12 space-y-6">
              <div className="space-y-2">
                <p>
                  Full Name <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  autoComplete="given-name"
                  className="border rounded px-2 py-3 w-full "
                />
              </div>
              <div className="space-y-2">
                <p>
                  Email <span className="text-red-500">*</span>
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  autoComplete="email"
                  className="border rounded px-2 py-3 w-full"
                />
              </div>
              <div className="space-y-2">
                <p>
                  Message <span className="text-red-500">*</span>
                </p>
                <textarea
                  rows={5}
                  placeholder="Type Something..."
                  required
                  className="border rounded px-2 py-3 w-full"
                />
              </div>
            </div>
            <button className="px-4 py-2 bg-[#377A00] hover:bg-[#2f6a00] text-white rounded mt-5 cursor-pointer">
              SEND MESSAGE
            </button>
          </form>
          <div className="mt-10 lg:mt-0">
            <p className="text-lg">
              Reach out for inquiries or support. Our team is here to assist
              you.
            </p>
            <div className="border border-[#377A00]/30 my-10"></div>
            <div className="flex justify-start space-x-2 my-5 md:text-xl text-lg">
              <p className="text-black font-bold">Phone: </p>
              <a href="tel:+91 95500 83889">+91 95500 83889</a>
            </div>
            <div className="flex justify-start space-x-2 my-5 md:text-xl text-lg">
              <p className="text-black font-bold">Email: </p>
              <a href="mailto:hello@krishlabs.in">hello@krishlabs.in</a>
            </div>
            <div className="flex justify-start space-x-2 my-5 md:text-xl text-lg">
              <p className="text-black font-bold">Address: </p>
              <p>
                #26-4-866, Ground Floor, Beside Shilpa Hospital, Hindupur, AP –
                515 201
              </p>
            </div>
            <div className="border border-[#377A00]/30 my-10"></div>
            <div>
              <p className="text-lg">Follow Us: </p>
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
        </div>
      </div>
      <AchiveGoals />
    </div>
  );
};

export default Contact;
