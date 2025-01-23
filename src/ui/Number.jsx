/* eslint-disable react/prop-types */
export default function Number({ item }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-extrabold text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFA229] to-[#2F5795]">
        {item.num}
        <span>+</span>
      </h1>
      <h2 className="mt-5 text-[#181617] font-bold text-xs sm;text-sm md:text-base uppercase text-center">
        {item.text}
      </h2>
    </div>
  );
}
