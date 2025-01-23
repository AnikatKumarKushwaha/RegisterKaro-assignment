import { PiNoteFill } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { FaUserShield } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";

export default function ExtraInfoSection() {
  return (
    <div className="bg-[#FFA229] py-10 grid grid-cols-2 sm:grid-cols-4 justify-items-center text-[10px] sm:text-[10px]  lg:text-base gap-2">
      <div className="text-[#3C2109] font-semibold flex items-center md:justify-center gap-3 w-40 lg:w-full">
        <div className="p-3 rounded-full bg-[#EB5757] text-pink-50">
          <PiNoteFill className="text-sm md:text-2xl lg:text-4xl" />
        </div>
        Fill up Application Form
      </div>
      <div className="text-[#3C2109] font-semibold flex items-center md:justify-center gap-3 w-40 lg:w-full">
        <div className="p-3 rounded-full bg-[#27AE60] text-pink-50">
          <MdOutlinePayment className="text-sm md:text-2xl lg:text-4xl" />
        </div>
        Make Online Payment
      </div>
      <div className="text-[#3C2109] font-semibold flex items-center md:justify-center gap-3 w-40 lg:w-full">
        <div className="p-3 rounded-full bg-[#F2994A] text-pink-50">
          <FaUserShield className="text-sm md:text-2xl lg:text-4xl" />
        </div>
        Executive will Process Application
      </div>
      <div className="text-[#3C2109] font-semibold flex items-center md:justify-center gap-3 w-40 lg:w-full">
        <div className="p-3 rounded-full bg-[#828282] text-pink-50">
          <AiFillMail className="text-sm md:text-2xl lg:text-4xl" />
        </div>
        Get Confirm Mail
      </div>
    </div>
  );
}
