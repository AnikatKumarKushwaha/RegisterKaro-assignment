import Service from "../ui/Service";
import img1 from "../images/icons/service1.png";
import img2 from "../images/icons/service2.png";
import img3 from "../images/icons/service3.png";
import img4 from "../images/icons/service4.png";
import img5 from "../images/icons/service5.png";
import img6 from "../images/icons/service6.png";
import Button from "../ui/Button";
import MiniHeader from "../ui/MiniHeader";

export default function ServicesSection() {
  return (
    <section className="bg-[#FAFAFA] py-10 ">
      <div className="text-center">
        <MiniHeader>WELCOME TO REGISTERKARO.IN</MiniHeader>
      </div>

      <div className="text-[#272D37] font-bold text-3xl text-center tracking-widest mt-6">
        Explore Our Services
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          <Service
            icon={img1}
            title="Company Formation"
            description="Build web-based solutions that
            enhance customer experience."
          />
          <Service
            icon={img2}
            title="Company Secretarial Services"
            description="Make data-driven decisions and
            utilize technology to reach
            business goals."
          />
          <Service
            icon={img3}
            title="Virtual Office Address"
            description="Foster customer relationships by
            effectively serving your market."
          />
          <Service
            icon={img4}
            title="Annual Compliance Services"
            description="Turn your ideas into modern
            products with our design experts."
          />
          <Service
            icon={img5}
            title="Payroll Services"
            description="Expand your business across the
            globe with minimal effort."
          />
          <Service
            icon={img6}
            title="Bookkeeping Services"
            description="Steering user behaviours with
            creative design, data insights &
            technology."
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button>See All Services</Button>
      </div>
    </section>
  );
}
