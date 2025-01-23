/* eslint-disable react/prop-types */
export default function RegisterKaroItem({ icon, color, title, des }) {
  return (
    <div
      className="w-[288.11px] h-[215px] rounded-lg  py-8 px-5 flex flex-col justify-center items-center gap-2"
      style={{ backgroundColor: color }}
    >
      <div>{icon}</div>
      <div className="font-medium text-lg tracking-wide text-[#000000]">
        {title}
      </div>
      <div className="text-sm text-[#666666] text-center">{des}</div>
    </div>
  );
}
