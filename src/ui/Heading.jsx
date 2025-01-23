/* eslint-disable react/prop-types */
export default function Heading({ children }) {
  return (
    <div className="text-[#272D37] font-bold text-lg sm:text-xl md:text-3xl tracking-wider mt-6">
      {children}
    </div>
  );
}
