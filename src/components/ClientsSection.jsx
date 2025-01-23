import img1 from "../images/clients.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ClientsSection() {
  return (
    <div className="py-[58px] ">
      <div className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#272D37]">
        Our Happy Clients
      </div>
      <div className="flex justify-center items-center mt-5 mb-10">
        <div className="text-center  text-[#666666] w-[800px]">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </div>
      </div>
      <div>
        <img src={img1} alt="clients" />
      </div>
      <div className="flex justify-center items-center">
        <button className="flex justify-center items-center gap-2">
          Show more <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}
