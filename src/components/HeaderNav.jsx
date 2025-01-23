import { IoMdMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";

import Logo from "../images/logo_logo 1.png";

export default function HeaderNav() {
  return (
    <header>
      {/*******  CONTACT INFO *******/}
      <div className=" bg-[#1C4670] h-14 px-10">
        <ul className=" flex justify-center sm:justify-end items-center h-full text-[#E6ECFD] text-normal     sm:text-sm text-[10px]">
          <li
            className="flex items-center justify-center gap-1 h-[28px] border-r border-transparent w-[177.97px]"
            style={{
              borderImage:
                "linear-gradient(to bottom, #00000000, #D0D0D0, #00000000) 1",
            }}
          >
            <IoMdMail className="w-[17.09px] h-[16.46px]" /> www.registerkaro.in
          </li>
          <li
            className="flex items-center justify-center gap-1 h-[28px] border-r border-transparent w-[177.97px] "
            style={{
              borderImage:
                "linear-gradient(to bottom, #00000000, #D0D0D0, #00000000) 1",
            }}
          >
            <IoIosCall className="w-[17.09px] h-[16.46px]" />
            +918447746183
          </li>
          <li className="flex items-center justify-center gap-1 sm:gap-3 h-[28px] border-r border-transparent w-[177.97px] ">
            <FaInstagram className="text-base sm:text-lg" />
            <FaFacebook className="text-base sm:text-lg" />
            <FaTwitter className="text-base sm:text-lg" />
            <FaPinterest className="text-base sm:text-lg" />
          </li>
        </ul>
      </div>
      {/*******  NAV LINK ********/}
      <div className="flex justify-between items-center h-[72px] px-5 md:px-[58px] border-b border-[#D1D1D199] border-opacity-60">
        <div className="w-28 h-5 sm:w-[200px] sm:h-[36.8px]">
          <img
            src={Logo}
            alt="logo"
            className="w-28 h-5 sm:w-[200px] sm:h-[36.8px]"
          />
        </div>
        <ul className="flex justify-between items-center text-normal font-normal text-[#272D37] gap-4 xl:gap-8 ">
          <li className="hidden lg:block">Home</li>
          <li className="hidden lg:flex justify-center items-center gap-2 ">
            Our Services <FaAngleDown />
          </li>
          <li className="hidden lg:block">Blog</li>
          <li className="hidden lg:block">Contact Us</li>
          <li className="hidden lg:block">About Us</li>
          <li>
            <HiMiniMagnifyingGlass className="text-lg sm:text-2xl" />
          </li>
          <li>
            <button className="bg-[#FFA229] text-[#FFFFFF] px-3 py-1 sm:px-5 sm:py-3 rounded-md font-semibold">
              Talk An Expert
            </button>
          </li>
        </ul>
      </div>
      {/* for small screens */}
      <ul className="flex justify-between items-center text-normal font-normal text-[#272D37] gap-2 sm:gap-8 lg:hidden py-2 px-4 text-xs sm:text-base">
        <li>Home</li>
        <li className="flex justify-center items-center gap-1 sm:gap-2">
          Our Services <FaAngleDown />
        </li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
    </header>
  );
}
