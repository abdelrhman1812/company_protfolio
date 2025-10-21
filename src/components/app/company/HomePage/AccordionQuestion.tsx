"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questionsItems } from "@/data/mock-questions";
import { CircleHelp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const AccordionQuestion = () => {
  const [activeIndex, setActiveIndex] = useState<string>("item-1");

  const t = useTranslations("HomePage.Questions");
  const support = useTranslations("Support");
  return (
    <div>
      <Accordion
        className="bg-white shadow-lg rounded-sm pt-8"
        type="single"
        collapsible
        onValueChange={(value) => setActiveIndex(value)}
        defaultValue="item-1"
      >
        {questionsItems(t).map((item) => (
          <AccordionItem
            value={`item-${item.id}`}
            key={item.id}
            className=" px-2 md:px-8"
          >
            <AccordionTrigger
              className={`py-6 flex items-center gap-4 font-bold ${
                activeIndex === `item-${item.id}`
                  ? "text-primary"
                  : "text-black"
              }`}
            >
              <span className="flex items-center gap-2">
                <CircleHelp /> {item.title}
              </span>
            </AccordionTrigger>

            <AccordionContent className="text-lightGray w-full py-6 opacity-70 leading-relaxed">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
        <div className="bg-secondary px-5 py-8 mt-10">
          <h6 className="text-center text-white">{support("title")}</h6>
          <p className="text-center mt-2 text-white">
            {support("description_first")}
            <span className="text-primary">
              {" "}
              {support("description_second")}
            </span>
          </p>
        </div>
      </Accordion>
    </div>
  );
};

export default AccordionQuestion;
