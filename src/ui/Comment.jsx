/* eslint-disable react/prop-types */
import img1 from "../images/comment1.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Comment({ comment }) {
  return (
    <div className="bg-[#FFFFFF] w-96 sm:w-[520px] h-[318px] rounded-lg shadow-md border border-[#FCDDEC] px-5 py-7 flex flex-col gap-7">
      <div className=" flex justify-between items-center">
        <div>
          <img src={img1} alt="semi colon" className="w-8 h-7" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaStar className="text-xl text-[#FFC226]" />
          <FaStar className="text-xl text-[#FFC226]" />
          <FaStar className="text-xl text-[#FFC226]" />
          <FaStar className="text-xl text-[#FFC226]" />
          <FaStarHalfAlt className="text-xl text-[#FFC226]" />
        </div>
      </div>
      <div className="text-sm sm:text-base">{comment.text}</div>
      <div className=" mb-auto flex  items-center gap-4 ">
        <div>
          <img src={comment.img} alt="profile" />
        </div>
        <div>
          <div className="font-bold text-base">{comment.user}</div>
          <div className="text-[#282728] font-normal text-xs">
            {comment.des}
          </div>
        </div>
      </div>
    </div>
  );
}
