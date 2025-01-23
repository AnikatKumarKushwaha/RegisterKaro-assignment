import ExploreItem from "../ui/ExploreItem";
import Heading from "../ui/Heading";
import MiniHeader from "../ui/MiniHeader";
import img1 from "../images/exploreImage1.png";
import img2 from "../images/exploreImage2.png";
import img3 from "../images/exploreImage3.png";
import img4 from "../images/exploreImage4.png";
import img5 from "../images/exploreImage5.png";
import Button from "../ui/Button";

import { FaArrowRightLong } from "react-icons/fa6";

export default function ExploreSection() {
  return (
    <section className="p-3 lg:p-10">
      <div className="text-center">
        <MiniHeader>EXPLORE OUR BLOGS</MiniHeader>
        <Heading>Accelerate Digital Transformation</Heading>
      </div>
      <div className="flex justify-around items-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-12">
          <ExploreItem
            img={img1}
            nameDate="Prabhash Mishra • 1 Jan 2023 • Today"
            title="Small business & Startup"
            des="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
            text1={["Tax & Audit", "#F9F5FF", "#6941C6"]}
            text2={["Management", "#F8F9FC", "#363F72"]}
          />
          <ExploreItem
            img={img2}
            nameDate="Mahesh Kumar • 1 Jan 2023"
            title="Scale-Up Company Offer"
            des="Mental models are simple expressions of complex processes or relationships."
            text1={["Tax", "#F0F9FF", "#026AA2"]}
            text2={["Research", "#EEF4FF", "#3538CD"]}
            text3={["Complience", "#FFF6ED", "#C4320A"]}
          />
          <ExploreItem
            img={img1}
            nameDate="Rakhi Verma • 1 Jan 2023"
            title="Growing Business Package"
            des="Introduction to Wireframing and its Principles. Learn from the best in the industry."
            text1={["Audit", "#F9F5FF", "#6941C6"]}
            text2={["Money Back", "#EEF4FF", "#3538CD"]}
          />
          <ExploreItem
            img={img3}
            nameDate="Karan Kumar • 1 Jan 2023"
            title="Scale-Up Company Offer"
            des="Collaboration can make our teams stronger, and our individual designs better."
            text1={["Money", "#F9F5FF", "#6941C6"]}
            text2={["Management", "#F8F9FC", "#363F72"]}
          />
          <ExploreItem
            img={img4}
            nameDate="Richa Singh • 1 Jan 2023"
            title="Scale-Up Company Offer"
            des="JavaScript frameworks make development easy with extensive features and functionalities."
            text1={["Tax Return", "#ECFDF3", "#027A48"]}
            text2={["News", "#FDF2FA", "#C11574"]}
            text3={["Audit", "#FFF1F3", "#C01048"]}
          />
          <ExploreItem
            img={img5}
            nameDate="Miss Nora• 1 Jan 2023"
            title="Scale-Up Company Offer"
            des="Starting a community doesn’t need to be complicated, but how do you get started?"
            text1={["Private Limited Company", "#F9F5FF", "#6941C6"]}
            text2={["Customer Success", "#F8F9FC", "#363F72"]}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button>
          Show More blogs <FaArrowRightLong />
        </Button>
      </div>
    </section>
  );
}
