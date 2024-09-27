import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/images/LogoHeader.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("Menu toggled, isMenuOpen:", !isMenuOpen); // Debug log
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="py-6 flex justify-between">
          <Image
            src={Logo}
            alt="logo"
            className="max-sm:w-auto max-sm:h-auto"
          />
          <div className="allmainbutton max-md:hidden">
            <button className="allbutton">Get Started</button>
          </div>
          <div className="max-md:block hidden">
            <button onClick={toggleMenu}>
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
              >
                <path
                  d="M4 18L20 18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 6L20 6"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="max-md:block hidden text-center">
          <div className="container mx-auto">
            <ul className="flex max-md:flex-col">
              <li className="navbarlist">HOME</li>
              <li className="navbarlist">SERVICES</li>
              <li className="navbarlist">PRICING</li>
              <li className="navbarlist">PORTFOLIO</li>
              <li className="navbarlist">ABOUT</li>
              <li className="navbarlist">CONTACT US</li>
            </ul>
            <div className="max-md:block">
              <div className="allmainbutton">
                <button className="allbutton">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-md:hidden border-y border-black">
        <div className="container mx-auto">
          <ul className=" flex flex-row">
            <li className="navbarlist border-l">HOME</li>
            <li className="navbarlist">SERVICES</li>
            <li className="navbarlist">PRICING</li>
            <li className="navbarlist">PORTFOLIO</li>
            <li className="navbarlist">ABOUT</li>
            <li className="navbarlist">CONTACT US</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
