import { FaFacebook, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#011B5B] text-[#AAB5CD] pt-14 pb-5">
      <div className=" flex lg:flex-row flex-col justify-center items-center lg:justify-around ">
        <div className="lg:w-[247px]">
          <p className="text-center lg:text-start">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-3 text-white mt-5">
            <FaFacebook className="text-2xl" />
            <FaGoogle className="text-2xl" />
            <FaApple className="text-2xl" />
            <FaInstagram className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-row lg:flex-col gap-4 mt-5 lg:mt-0">
          <div className=" text-orange-400 font-semibold text-lg">
            START A BUSINESS
          </div>
          <div className="hidden sm:block">Features</div>
          <div className="hidden sm:block">Solutions</div>
          <div className="hidden sm:block">Integrations</div>
          <div className="hidden sm:block">Enterprise</div>
          <div className="hidden sm:block">Solutions</div>
        </div>
        <div className="flex flex-row lg:flex-col gap-4 mt-5 lg:mt-0">
          <div className=" text-orange-400 font-semibold text-lg">
            GOVERNMENT REGISTRATION
          </div>
          <div className="hidden sm:block">Partners</div>
          <div className="hidden sm:block">Community</div>
          <div className="hidden sm:block">Developers</div>
          <div className="hidden sm:block">App</div>
          <div className="hidden sm:block">Blog</div>
        </div>
        <div className="flex flex-row lg:flex-col gap-4 mt-5 lg:mt-0">
          <div className=" text-orange-400 font-semibold text-lg">
            COMPLIANCE & TAX
          </div>
          <div className="hidden sm:block">Channels</div>
          <div className="hidden sm:block">Scale</div>
          <div className="hidden sm:block">Watch the Demo</div>
          <div className="hidden sm:block">Our Competition</div>
        </div>
        <div className="flex flex-row lg:flex-col gap-4 mt-5 lg:mt-0">
          <div className=" text-orange-400 font-semibold text-lg">
            BIS & CDSCO
          </div>
          <div className="hidden sm:block">About Us</div>
          <div className="hidden sm:block">News</div>
          <div className="hidden sm:block">Leadership</div>
          <div className="hidden sm:block">Media Kit</div>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-14">
        <button className="p-4 bg-orange-400 rounded-full text-white">
          <FaArrowUp className="text-2xl" />
        </button>
        <div className="text-sm">© 2024 Registerkaro. All Rights Reserved.</div>
      </div>
    </div>
  );
}
