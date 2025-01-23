/* eslint-disable react/prop-types */
export default function ExploreItem({
  img,
  nameDate,
  title,
  des,
  text1,
  text2,
  text3,
}) {
  return (
    <div className="flex flex-col gap-8 w-80 sm:w-64 lg:w-96">
      <div>
        <img src={img} alt="explore" className="" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-[#667085] text-sm font-semibold">{nameDate}</div>
        <div className="font-bold text-xl sm:text-2xl text-[#1A1A1A]">
          {title}
        </div>
        <div className="text-[#667085] font-normal text-sm">{des}</div>
        <div className="flex gap-3">
          {text1 && (
            <span
              className=" inline-block px-2 rounded-full shadow-sm text-xs md:text-base"
              style={{ color: text1[2], backgroundColor: text1[1] }}
            >
              {text1[0]}
            </span>
          )}
          {text2 && (
            <span
              className="inline-block px-2 rounded-full shadow-sm text-xs md:text-base"
              style={{ color: text2[2], backgroundColor: text2[1] }}
            >
              {text2[0]}
            </span>
          )}
          {text3 && (
            <span
              className="inline-block px-2 rounded-full shadow-sm text-xs md:text-base"
              style={{ color: text3[2], backgroundColor: text3[1] }}
            >
              {text3[0]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
