import { AlignRight, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mx-5 lg:mx-[10%] sm:mx-[5%] mt-6 text-white">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <h1>krishlabs</h1>
        </Link>
        <div className="hidden md:flex lg:space-x-6 md:space-x-4 items-center">
          <NavLink className="hover:text-white/60" to={"/"}>
            HOME
          </NavLink>
          <NavLink className="hover:text-white/60" to={"/about"}>
            ABOUT
          </NavLink>
          <NavLink className="hover:text-white/60" to={"/services"}>
            SERVICES
          </NavLink>
          <div className="group relative">
            <Link className="flex items-center gap-x-1">MORE <IoIosArrowDown size={20} /></Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <Link className="hover:text-black" to={"/blog"}>
                  BLOG
                </Link>
                <Link className="hover:text-black" to={"/contact"}>
                  CONTACT
                </Link>
                <Link
                  className="hover:text-black"
                  onClick={() => setShowMenu(false)}
                  to={"/career"}
                >
                  CAREER
                </Link>
              </div>
            </div>
          </div>
          {/* <Link to={"/contact"}>
            <button className="border-2 px-6 py-3 border-white cursor-pointer hover:bg-white hover:text-black hover:transition-all hover:duration-500 hover:ease-in-out">
              GET STARTED
            </button>
          </Link> */}
        </div>
        <div className="md:hidden">
          <button className="w-6" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <X /> : <AlignRight />}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden absolute bg-black/80 min-w-[90%]">
          <div className="flex flex-col justify-center items-center gap-4 py-6">
            <NavLink
              className="hover:text-white/60"
              onClick={() => setShowMenu(false)}
              to={"/"}
            >
              HOME
            </NavLink>
            <NavLink
              className="hover:text-white/60"
              onClick={() => setShowMenu(false)}
              to={"/about"}
            >
              ABOUT
            </NavLink>
            <NavLink
              className="hover:text-white/60"
              onClick={() => setShowMenu(false)}
              to={"/services"}
            >
              SERVICES
            </NavLink>
            <NavLink
              className="hover:text-white/60"
              onClick={() => setShowMenu(false)}
              to={"/blog"}
            >
              BLOG
            </NavLink>
            <NavLink
              className="hover:text-white/60"
              onClick={() => setShowMenu(false)}
              to={"/contact"}
            >
              CONTACT
            </NavLink>
            <NavLink
              className="hover:text-white/60"
              onClick={() => setShowMenu(false)}
              to={"/career"}
            >
              CAREER
            </NavLink>
            {/* <Link to="/contact" onClick={() => setShowMenu(false)}>
              <button className="border-2 px-6 py-3 border-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
                GET STARTED
              </button>
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
