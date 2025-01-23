import img1 from "../images/Company.png";
import img2 from "../images/Company1.png";
import img3 from "../images/Company2.png";
import img4 from "../images/Company3.png";
import img5 from "../images/Company4.png";
import img6 from "../images/Company5.png";

export default function CompanySection() {
  return (
    <div className="p-4 sm:p-8 md:p-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-4">
      <div className="flex justify-center items-center">
        <img src={img1} alt="company" />
      </div>
      <div className="flex justify-center items-center">
        <img src={img2} alt="company" />
      </div>
      <div className="flex justify-center items-center">
        <img src={img3} alt="company" />
      </div>
      <div className="flex justify-center items-center">
        <img src={img4} alt="company" />
      </div>
      <div className="flex justify-center items-center">
        <img src={img5} alt="company" />
      </div>
      <div className="flex justify-center items-center">
        <img src={img6} alt="company" />
      </div>
    </div>
  );
}
