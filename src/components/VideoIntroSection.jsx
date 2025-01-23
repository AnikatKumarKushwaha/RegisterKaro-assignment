import img1 from "../images/VideoIntro1.png";
import { FaLightbulb } from "react-icons/fa6";
import { HiPresentationChartLine } from "react-icons/hi";

export default function VideoIntroSection() {
  return (
    <div className="bg-[#1C4670] text-white p-4 sm:p-[58px]  flex xl:flex-row flex-col gap-10">
      <div className="xl:w-[50%]">
        <div className="font-bold text-xl sm:text-2xl md:text-3xl tracking-wider">
          Our Video Introductions
        </div>
        <div className="mt-8 text-[#AAB5CD] sm:w-[572px]">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt apis dui.
        </div>
        <div className="mt-10">
          <div className="flex gap-5">
            <div>
              <div className="rounded-full bg-[#FFA229] p-2">
                <FaLightbulb className="text-white text-3xl" />
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg sm:text-xl">
                Explore ideas together
              </div>
              <div className="text-[#AAB5CD]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <div className="rounded-full bg-[#FFA229] p-2">
                <HiPresentationChartLine className="text-white text-3xl" />
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg sm:text-xl">
                Bring those ideas to life
              </div>
              <div className="text-[#AAB5CD]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-[50%] flex justify-center items-center">
        <img src={img1} alt="video" />
      </div>
    </div>
  );
}
