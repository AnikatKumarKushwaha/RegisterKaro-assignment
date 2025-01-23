import { FaCheckCircle } from "react-icons/fa";

export default function MailSection() {
  return (
    <div className="py-14 flex flex-col justify-center items-center bg-gradient-to-br from-[#FFA229] to-[#1C4670] relative z-20 text-white">
      <h4 className="text-sm">1% OF THE INDUSTRY</h4>
      <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl my-5 text-center">
        Welcome to your new digital reality. Now.
      </h1>
      <div>
        <input
          type="mail"
          placeholder="Enter your mail"
          className=" w-48 sm:w-80 md:w-[420px] rounded-s-md px-4 py-3"
        />
        <button className="w-92px px-4 py-3 bg-[#FFA229] rounded-e-md">
          Submit
        </button>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row gap-2 md:gap-7 mt-10 mx-4">
        <div className="flex items-center gap-1 md:gap-5">
          <FaCheckCircle />
          Instant results
        </div>
        <div className="flex items-center gap-1 md:gap-5">
          <FaCheckCircle />
          User-friendly interface
        </div>
        <div className="flex items-center gap-1 md:gap-5">
          <FaCheckCircle />
          Personalized customization
        </div>
      </div>
    </div>
  );
}
