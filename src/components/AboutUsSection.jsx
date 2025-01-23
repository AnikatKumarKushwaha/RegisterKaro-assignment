import Button from "../ui/Button";
import MiniHeader from "../ui/MiniHeader";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import img1 from "../images/AboutUs1.png";
import img2 from "../images/AboutUs2.png";
import img3 from "../images/AboutUs3.png";

export default function AboutUsSection() {
  return (
    <section className="bg-[#FFFFFF] py-[58px] lg:flex p-1 sm:p-5  md:py-[58px] md:pl-[58px] gap-10">
      <div className="lg:w-[50%] flex flex-col gap-8 text-center sm:text-start">
        <MiniHeader>WELCOME TO REGISTERKARO.IN</MiniHeader>
        <div className="text-lg sm:text-xl md:text-3xl font-bold  text-[#272D37]">
          About <span className="text-[#EB8D15]">Register Karo</span>
        </div>
        <div className=" tracking-wide font-light">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects thereby exceeding
          everyone’s expectations.
        </div>
        <div className=" tracking-wide font-light">
          I would strongly recommend their services to any organization that is
          looking for solid, reliable, and predictable outcomes.
        </div>
        <span>
          <Button>
            Learn More <FaRegArrowAltCircleRight />
          </Button>
        </span>
      </div>
      <div className="lg:w-[50%] relative lg:mt-0 mt-10">
        <img src={img1} alt="about us" className="z-40 relative" />
        <img
          src={img2}
          alt="about us"
          className="absolute right-0 top-0 z-30 hidden sm:block"
        />
        <img
          src={img3}
          alt="about us"
          className="absolute right-0 bottom-0 z-20"
        />
      </div>
    </section>
  );
}
