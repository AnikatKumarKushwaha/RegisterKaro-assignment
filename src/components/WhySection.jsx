import Heading from "../ui/Heading";
import MiniHeader from "../ui/MiniHeader";
import Number from "../ui/Number";

const numbers = [
  {
    id: 1,
    num: "1M",
    text: "Customers",
  },
  {
    id: 2,
    num: "1M",
    text: "Customers",
  },
  {
    id: 3,
    num: "12",
    text: "Years of Excellence",
  },
  {
    id: 4,
    num: "41",
    text: "R&D Engineers",
  },
  {
    id: 5,
    num: "78",
    text: "Countries",
  },
  {
    id: 6,
    num: "41",
    text: "Awards Received",
  },
];

export default function WhySection() {
  return (
    <div className="p-14 relative z-10 bg-[#FAFAFA]">
      <div className="text-center">
        <MiniHeader>Why Register karo</MiniHeader>
        <Heading>Some Numbers are important</Heading>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-10 place-items-center">
        {numbers.map((item) => (
          <Number key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
