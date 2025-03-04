import { AlignRight, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink className="hover:text-white/60" to={"/offering"}>
            OFFERING
          </NavLink>
          <NavLink className="hover:text-white/60" to={"/blog"}>
            BLOG
          </NavLink>
          <NavLink className="hover:text-white/60" to={"/contact"}>
            CONTACT
          </NavLink>
          <Link to={"/contact"}>
            <button className="border-2 px-6 py-3 border-white cursor-pointer hover:bg-white hover:text-black hover:transition-all hover:duration-500 hover:ease-in-out">
              GET STARTED
            </button>
          </Link>
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
              to={"/offering"}
            >
              OFFERING
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
            <Link to="/contact" onClick={() => setShowMenu(false)}>
              <button className="border-2 px-6 py-3 border-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
