import Moroheus from "../images/Morpheus.png";
import monday from "../images/monday.png";
import samsung from "../images/Samsung.png";
import segment from "../images/segment.png";
import oracle from "../images/oracle.png";

export default function BusinessSection() {
  return (
    <section className="py-10 flex flex-col justify-center items-center gap-10">
      <div className="text-base sm:text-xl md:text-2xl font-semibold text-center">
        Trusted By Over 100+ Startups and freelance business
      </div>
      <div className="flex items-center justify-center gap-12 md:gap-12 mx-3 flex-wrap md:flex-nowrap">
        <div>
          <img src={oracle} alt="oracle" />
        </div>
        <div>
          <img src={Moroheus} alt="Moroheus" />
        </div>
        <div>
          <img src={Moroheus} alt="Moroheus" />
        </div>
        <div>
          <img src={samsung} alt="samsung" />
        </div>
        <div>
          <img src={monday} alt="monday" />
        </div>
        <div>
          <img src={segment} alt="segment" />
        </div>
      </div>
    </section>
  );
}
