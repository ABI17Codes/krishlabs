import React from "react";
import { Images } from "../../assets/Images";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Offers = [
  {
    id: 1,
    name: "Web Development Services",
    desc: "Your website is your digital storefront. We develop responsive, fast, and SEO-friendly websites tailored to your brand, ensuring a smooth user experience and maximum online visibility.",
    features: [
      "Custom Website Development",
      "E-Commerce & CMS Solutions",
      "Progessive Web Apps (PWAs)",
    ],
    // amount: "₹3,000 – ₹10,000",
    image: `${Images.Image4}`,
  },
  {
    id: 2,
    name: "Mobile App Development",
    desc: "We build high-performance Android and iOS apps using the latest technologies. Whether you need a native app or a cross-platform solution, we ensure seamless performance, intuitive UI/UX, and scalability.",
    features: [
      "Native & Cross-Platform Apps",
      "UI/UX Design & Prototyping",
      "App Maintenance & Support",
    ],
    // amount: "₹5,000 – ₹15,000",
    image: `${Images.Image1}`,
  },
  {
    id: 3,
    name: "Custom Software Solutions",
    desc: "We design and develop custom software solutions that align with your business objectives. From enterprise applications to SaaS platforms, we build scalable and secure systems.",
    features: [
      "Enterprise & SaaS Solutions",
      "Automation & AI-Powered Tools",
      "API & Backend Development",
    ],
    // amount: "₹10,000 – ₹50,000",
    image: `${Images.Image2}`,
  },
  {
    id: 4,
    name: "Digital Marketing Strategies",
    desc: "Get ahead of the competition with data-driven digital marketing strategies. We specialize in SEO, social media marketing, PPC campaigns, and content marketing to help you attract, engage, and convert customers.",
    features: [
      "SEO & Google Ads",
      "Social Media Marketing",
      "Email & Content Marketing",
    ],
    // amount: "₹2,000 – ₹8,000",
    image: `${Images.Image3}`,
  },
  {
    id: 5,
    name: "Graphic Design",
    desc: "Create a strong brand identity with our professional graphic design services. We deliver stunning logos, UI/UX designs, social media creatives, and video content to enhance your brand’s presence.",
    features: [
      "Logo & Branding Design",
      "UI/UX & Web Design",
      "Motion Graphics & Video Editing",
    ],
    // amount: "₹2,000 – ₹8,000",
    image: `${Images.Image4}`,
  },
];

const Offer = () => {
  return (
    <div className="mt-10 space-y-12">
      {Offers.map((offer, index) => (
        <div key={offer.id} className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
          {index % 2 === 0 ? (
            <>
              <div>
                <img className="w-full rounded-xl" src={offer.image} alt={offer.name} />
              </div>
              <div>
                <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-black">{offer.name}</p>
                <p className="font-light md:text-xl text-lg mt-2 text-gray-700">{offer.amount}</p>
                <p className="mt-2 md:text-lg text-gray-600">{offer.desc}</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  {offer.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-3 inline-block">
                  <Link to={"/contact"}>
                    <button className="text-[#377A00] cursor-pointer flex items-center font-medium">
                      LEARN MORE
                      <ArrowRight className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-black">{offer.name}</p>
                <p className="font-light md:text-xl text-lg mt-2 text-gray-700">{offer.amount}</p>
                <p className="mt-2 md:text-lg text-gray-600">{offer.desc}</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  {offer.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-3 inline-block">
                  <Link to={"/contact"}>
                    <button className="text-[#377A00] cursor-pointer flex items-center font-medium ">
                      LEARN MORE
                      <ArrowRight className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <img className="w-full rounded-xl" src={offer.image} alt={offer.name} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Offer;
