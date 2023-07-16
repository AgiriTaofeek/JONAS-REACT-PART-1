import { ReactNode, useState } from "react";
import AccordionItem from "./AccordionItem";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export type FaqsType = {
  title: string;
  num: number;
  curOpen: null | number;
  onOpen: React.Dispatch<React.SetStateAction<null | number>>;
  children: ReactNode;
};

const Accordion = () => {
  const [curOpen, setCurOpen] = useState<null | number>(null);
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          key={`new-${i}-${el.title}`}
          num={i}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
