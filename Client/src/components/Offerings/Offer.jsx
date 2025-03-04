import React from "react";
import { Images } from "../../assets/Images";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Offers = [
  {
    id: 1,
    name: "Web Development Services",
    amount: "$3,000 – $10,000",
    image: `${Images.Image4}`,
  },
  {
    id: 2,
    name: "Mobile App Development",
    amount: "$5,000 – $15,000",
    image: `${Images.Image1}`,
  },
  {
    id: 3,
    name: "Custom Software Solutions",
    amount: "$10,000 – $50,000",
    image: `${Images.Image2}`,
  },
  {
    id: 4,
    name: "Digital Marketing Strategies",
    amount: "$2,000 – $8,000",
    image: `${Images.Image3}`,
  },
];

const Offer = () => {
  return (
    <div className="mt-10">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:space-x-10 md:space-x-5 space-y-5">
        {Offers.map((offer, index) => (
          <div key={index}>
            <img className="w-full rounded-xl" src={offer.image} alt="image" />
            <p className="mt-2 lg:text-3xl sm:text-2xl text-xl text-black">
              {offer.name}
            </p>
            <p className="font-light md:text-xl text-lg mt-2">{offer.amount}</p>
            <div>
              <Link to={"/contact"}>
                <button className="text-[#377A00] mt-2 cursor-pointer flex font-medium">
                  LEARN MORE
                  <ArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
