import FAQItem from "../ui/FAQItem";
import Heading from "../ui/Heading";
import MiniHeader from "../ui/MiniHeader";

const faqs = [
  {
    id: 1,
    text: "Can I recover deleted files from desktop with this software?",
  },
  {
    id: 2,
    text: "Can I recover deleted files from desktop with this software?",
  },
  {
    id: 3,
    text: "Can I recover deleted files from desktop with this software?",
  },
  {
    id: 4,
    text: "Can I recover deleted files from desktop with this software?",
  },
  {
    id: 5,
    text: "Can I recover deleted files from desktop with this software?",
  },
];

export default function FAQSection() {
  return (
    <div className=" p-4 sm:p-8 md:p-14  bg-[#FAFAFA]">
      <div className="text-center">
        <MiniHeader>FAQ</MiniHeader>
        <Heading>Frequent Ask Questions </Heading>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {faqs.map((item) => (
          <FAQItem key={item.id} text={item.text} />
        ))}
      </div>
    </div>
  );
}
