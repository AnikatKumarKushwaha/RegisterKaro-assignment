/* eslint-disable react/prop-types */
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Service({ icon, title, description }) {
  return (
    <div className="  flex flex-col items-center gap-5">
      <div>
        <img src={icon} alt="service icon" />
      </div>
      <div className="font-extrabold ">{title}</div>
      <div className="text-center w-[263.19px] font-light text-[#282728]">
        {description}
      </div>
      <div className="font-semibold text-base mt-auto flex items-center gap-3">
        Learn more <FaRegArrowAltCircleRight />
      </div>
    </div>
  );
}
