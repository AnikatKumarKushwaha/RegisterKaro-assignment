import img1 from "../images/appstore.png";
import img2 from "../images/googleplay.png";
import img3 from "../images/Phone.png";

export default function ManageSection() {
  return (
    <div className="p-4 sm:p-8 md:p-14 flex gap-20 bg-[#1C4670] text-white">
      <div className="lg:w-[50%] flex flex-col gap-10">
        <h1 className="font-extrabold text-xl sm:text-2xl md:text-4xl ">
          Manage Your Services by your Mobile Phone
        </h1>
        <h6 className="text-[#AAB5CD] font-normal text-sm sm:text-base">
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.{" "}
        </h6>
        <div>
          <h6 className="mb-5">Get the App</h6>
          <div className="flex gap-5">
            <div>
              <img src={img1} alt="appstore" />
            </div>
            <div>
              <img src={img2} alt="googleplay" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] relative hidden lg:block">
        <img
          src={img3}
          alt="phone"
          className="absolute  w-60  -top-40 custom:top-2 custom:-left-20 lg:w-96"
        />
        <img
          src={img3}
          alt="phone"
          className="absolute -top-40 left-60 custom:block hidden w-96"
        />
      </div>
    </div>
  );
}
