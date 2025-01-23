import Heading from "../ui/Heading";
import MiniHeader from "../ui/MiniHeader";
import RegisterKaroItem from "../ui/RegisterKaroItem";
import { FaShieldAlt, FaCheckCircle, FaUserTie } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";

export default function RegisterKaroSection() {
  return (
    <div className="bg-[#FFFFFF] py-10 sm:p-[58px] ">
      <div className="flex  justify-around items-center flex-wrap gap-4 ">
        <div className="w-[650px] text-center sm:text-start">
          <MiniHeader>WHY REGISTERKARO.IN</MiniHeader>
          <div className="my-8 text-center sm:text-start">
            <Heading>Why Choose Register Karo</Heading>
          </div>
          <div className="text-[#0D1216] text-center sm:text-start mb-5 sm:mb-0">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </div>
        </div>
        <div>
          <RegisterKaroItem
            title="Confidential & Safe"
            des="All your private information is safe
              with us"
            color="#FCDDEC"
            icon={
              <FaShieldAlt className=" text-[#F45C20] font-black text-4xl" />
            }
          />
        </div>
        <div>
          <RegisterKaroItem
            title="No Hidden Fee"
            des="Everything is put before you with
              no hidden charges or conditions"
            color="#F1FBF3"
            icon={
              <FaCheckCircle className=" text-[#3DCD5C] font-black text-4xl" />
            }
          />
        </div>

        <div className="hidden custom:block">
          <RegisterKaroItem />
        </div>
        <div>
          <RegisterKaroItem
            title="No Hidden Fee"
            des="Everything is put before you with
              no hidden charges or conditions"
            color="#F1FBF3"
            icon={
              <BsEmojiSmileFill className=" text-[#3DCD5C] font-black text-4xl" />
            }
          />
        </div>

        <div>
          <RegisterKaroItem
            title="Confidential & Safe"
            des="All your private information is safe
              with us"
            color="#FBF1FB"
            icon={<FaUserTie className=" text-[#D5414F] font-black text-4xl" />}
          />
        </div>
        <div>
          <RegisterKaroItem
            title="No Hidden Fee"
            des="Everything is put before you with
              no hidden charges or conditions"
            color="#27AE600A"
            icon={
              <FaShieldAlt className=" text-[#F45C20] font-black text-4xl" />
            }
          />
        </div>
      </div>
    </div>
  );
}
