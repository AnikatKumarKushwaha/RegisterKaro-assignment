/* eslint-disable react/prop-types */
export default function Button({ children }) {
  return (
    <button className="bg-[#1C4670] px-2 py-1 sm:px-4 sm:py-2 md:px-8 md:py-3 rounded-md text-[#ffff] flex justify-center items-center gap-2 text-sm sm:text-base">
      {children}
    </button>
  );
}
