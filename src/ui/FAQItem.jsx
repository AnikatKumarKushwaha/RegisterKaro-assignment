/* eslint-disable react/prop-types */
import { FaChevronRight } from "react-icons/fa";

export default function FAQItem({ text }) {
  return (
    <div className="flex justify-between items-center h-16 px-4 py-3 rounded-md shadow-md relative overflow-hidden border border-slate-100 bg-white">
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#FFA229] to-[#1C4670]"></div>
      <div className="flex-grow pl-4 text-sm sm:text-base">{text}</div>
      <div>
        <FaChevronRight />
      </div>
    </div>
  );
}
