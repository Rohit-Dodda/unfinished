import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/data";
import logo from "../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 top-0 z-20 ${
        scrolled ? "" : "bg-transparent"
      }`}
      // style={{ position: "fixed", top: 0, left: 0, right: 0,  }}
    >
      <div className={`w-full rounded-3xl flex justify-center items-center max-w-8xl mx-auto `}>
        <Link
          to="/"
          className="flex items-center gap-2 mr-20"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Neura Logo"
            class="w-24 h-24 object-contain leading-tight text-white hover:rotate-360 duration-500"
          />

          <span className="mx-2 flex neura flex-row items-center justify-center text-white neura leading-tight cursor-pointer font-bold text-[50px]">
            <span className="mr-[1px] text-white neura leading-tight cursor-pointer font-bold text-[50px]">
              N
            </span>
            <span className="mr-[1px] text-white neura leading-tight cursor-pointer font-bold text-[50px]">
              e
            </span>
            <span className="mr-[1px] text-white neura leading-tight cursor-pointer font-bold text-[50px]">
              u
            </span>
            <span className="mr-[1px] text-white neura leading-tight cursor-pointer font-bold text-[50px]">
              r
            </span>
            <span className="mr-[1px] text-white neura leading-tight cursor-pointer font-bold text-[50px]">
              a
            </span>
          </span>
        </Link>

        <ul className="list-none mr-[140px] hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-[#514e4e]"
              } hover:text-white hover:scale-110 duration-500 transition-all text-[23px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className='bg-transparent'>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center gap-10">
          <div className="text-[#514e4e]  hover:bg-[#2e2c2c] rounded-xl px-5 py-1 hover:text-white hover:scale-110 duration-500 transition-all text-[23px] font-medium cursor-pointer">
            Features
            <KeyboardArrowDownIcon className="text-gray-500 bg-transparent hover:rotate-180 duration-500" />
          </div>

          <Link to="/login">
            <button
              type="button"
              className="border-none hover:scale-110 cursor-pointer duration-500 transition-all login-btn outline-none h-[40px] w-[96px] rounded-md px-5 py-1 bg-red-900 whitespace-nowrap"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              type="button"
              className="border-none signup-btn hover:scale-110 duration-500 transition-all outline-none h-[40px] w-[96px] rounded-md px-5 py-1 bg-red-500 whitespace-nowrap"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
