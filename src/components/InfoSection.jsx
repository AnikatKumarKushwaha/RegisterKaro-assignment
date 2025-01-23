import { IoIosStar } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";

import Img1 from "../images/info_section_1.png";
import Img2 from "../images/info_section_2.png";
import Button from "../ui/Button";

export default function InfoSection() {
  return (
    <section className="bg-gradient-to-br from-[#FFFFFF] via-[#FFF0DCAB] to-[#EDF6FFB2] flex flex-col lg:flex-row">
      <div className="lg:w-[55%]  xl:w-[50%] p-1 sm:p-5  md:py-[58px] md:pl-[58px] ">
        {/********* Ratings *******/}

        <div className="flex items-center gap-2 text-sm font-semibold">
          <IoIosStar className=" text-[#F2994A] h-5 w-5 " />
          Google Rating
          <div className="flex items-center gap-[2px]">
            <div className=" bg-[#F2994A] inline-block p-[2px] rounded-sm text-[9px] text-white">
              <IoIosStar />
            </div>
            <div className=" bg-[#F2994A] inline-block p-[2px] rounded-sm text-[9px] text-white">
              <IoIosStar />
            </div>
            <div className=" bg-[#F2994A] inline-block p-[2px] rounded-sm text-[9px] text-white">
              <IoIosStar />
            </div>
            <div className=" bg-[#F2994A] inline-block p-[2px] rounded-sm text-[9px] text-white">
              <IoIosStar />
            </div>
            <div className=" bg-[#F2994A] inline-block p-[2px] rounded-sm text-[9px] text-white">
              <IoIosStar />
            </div>
          </div>
        </div>

        <div className="mt-8 ">
          <div className="text-xl sm:text-3xl md:text-5xl text-[#010101]">
            Your trusted partner
          </div>
          <div className="text-xl sm:text-3xl md:text-5xl text-[#010101]">
            for compliance business needs
          </div>
        </div>
        {/* red line */}

        <div className="w-10 my-8 h-[1px] bg-[#F60014]"></div>
        {/* description */}

        <div className="text-[#4F4F4F] text-sm md:text-lg tracking-wider">
          An online business compliance platform that helps entrepreneurs and
          other individuals with various,{" "}
          <span className="font-semibold">registrations</span>,{" "}
          <span className="font-semibold">tax filings</span>, and other{" "}
          <span className="font-semibold">legal matters.</span>
        </div>
        <div className="mt-8 flex justify-between items-center">
          {/******* CUSTOMER RATING *******/}
          <div className="flex gap-2 md:gap-4 items-center ">
            <div>
              <IoGridOutline className="text-xl sm:text-3xl md:text-4xl text-[#4F4F4F]" />
            </div>
            <div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] to-[#1C4670] font-bold text-sm sm:text-base md:text-xl">
                4.5 +
              </div>
              <div className="text-xs sm:text-sm tracking-tight sm:tracking-wider text-[#4F4F4F]">
                Customer Rating
              </div>
            </div>
          </div>
          {/******* Clients *******/}
          <div className="flex gap-2 md:gap-4 items-center ">
            <div>
              <HiOutlineUserGroup className="text-xl sm:text-3xl md:text-4xl text-[#4F4F4F]" />
            </div>
            <div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] to-[#1C4670] font-bold text-sm sm:text-base md:text-xl">
                20,000 +
              </div>
              <div className="text-xs sm:text-sm tracking-tight sm:tracking-wider text-[#4F4F4F]">
                Clients
              </div>
            </div>
          </div>
          {/******* Financial Stability *******/}
          <div className="flex gap-2 md:gap-4 items-center ">
            <div>
              <FaRegHandshake className="text-xl sm:text-3xl md:text-4xl text-[#4F4F4F]" />
            </div>
            <div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] to-[#1C4670] font-bold text-sm sm:text-base md:text-xl">
                99.8%
              </div>
              <div className="text-xs sm:text-sm tracking-tight sm:tracking-wider text-[#4F4F4F]">
                Financial Stability
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-10">
          <Button>Talk An Expert</Button>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <FaPlayCircle className="text-xl text-[#FF591E]" /> See How It Works
          </div>
        </div>
      </div>
      <div className="lg:w-[45%] xl:w-[50%] relative">
        <img
          src={Img1}
          alt="info image"
          className="w-72 sm:w-80 md:w-[460px] lg:w-[400px] xl:w-[550px] md:h-[484.19px] mt-24 ml-14"
        />
        <img
          src={Img2}
          alt="info image"
          className=" absolute bottom-0 right-0"
        />
        <ul className="absolute right-0 top-8 flex flex-col gap-4 md:gap-8">
          <li className="w-[177px] h-[52px] bg-[#FFFFFF] rounded-md flex justify-center items-center shadow-md">
            Annual Compliance
          </li>
          <li className="w-[177px] h-[52px] bg-[#FFFFFF] rounded-md flex justify-center items-center shadow-md">
            Payroll Services
          </li>
          <li className="w-[177px] h-[52px] bg-[#FFFFFF] rounded-md flex justify-center items-center shadow-md">
            Company Formation
          </li>
          <li className="w-[177px] h-[52px] bg-[#FFFFFF] rounded-md flex justify-center items-center shadow-md">
            Annual Compliance
          </li>
        </ul>
      </div>
    </section>
  );
}
