import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/brand", label: "Brand" },
  { path: "/team", label: "Our Team" },
  { path: "/press", label: "Press Release" },
  { path: "/contact", label: "Contact" },
  { path: "/career", label: "Careers" },
  { path: "/", label: "FRANCHISE", extraClass: "text-outline" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const navlist = (
    <ul className="flex flex-col md:flex-row md:gap-5 text-white uppercase font-thin font-serif text-[16px] text-center">
      {navItems.map((item, index) => (
        <li
          key={index}
          className={`nav-item px-3 py-1 hover:bg-[orange] ${
            item.extraClass || ""
          }`}
        >
          <Link to={item.path} onClick={handleClose}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 md:flex md:justify-between md:items-center bg-[orange] md:bg-[#00000082] px-5 py-3 z-10">
        <div className="logo flex justify-between">
          <img
            src="https://pn-paul.netlify.app/image/ff-logo-02.png"
            alt="Logo"
            className="md:w-[65px] w-[40px] md:block hidden"
          />
          <img
            className="block md:hidden w-[50%] "
            src="https://pn-paul.netlify.app/image/logo-for-mobile.png"
            alt="Logo"
          />

          {/* mobile icon */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* logo end */}
        {/* desktop */}
        <div className="menu hidden md:block">{navlist}</div>
        {/* mobile */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out z-20 ${
            open
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <br />
          {navlist}
        </div>
      </nav>
    </>
  );
}

export default Nav;
