import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import profile from "../images/commentProfile.png";
import Comment from "../ui/Comment";

const comments = [
  {
    id: 1,
    user: "Chris",
    des: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    img: profile,
  },
  {
    id: 2,
    user: "Chris",
    des: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    img: profile,
  },
  {
    id: 3,
    user: "Chris",
    des: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    img: profile,
  },
  {
    id: 3,
    user: "Chris",
    des: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    img: profile,
  },
];

export default function CommentSection() {
  return (
    <div className="bg-[#1C4670] py-14 pl-4 sm:pl-7 md:pl-14">
      <div className="flex justify-between pr-4 md:pr-10">
        <div className="font-bold text-xl sm:text-2xl md:text-3xl text-white w-48 sm:w-full">
          What peoples says about us
        </div>
        <div className="flex justify-center items-center gap-1 sm:gap-5">
          <button className="p-2 rounded-full text-[#1478F1] border border-[#FCDDEC] bg-white">
            <FaChevronLeft className="text-2xl" />
          </button>
          <button className="p-2 rounded-full text-[#FFFFFF] border border-[#FCDDEC] bg-[#FFA229]">
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="pt-14 flex gap-7 mx-auto max-w-full overflow-x-auto">
        {comments.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            <Comment comment={item} />
          </div>
        ))}
      </div>
      <div className="mt-4 text-center text-stone-100 text-4xl">
        <span className="text-[#FFA229]">•</span> • • •
      </div>
    </div>
  );
}
