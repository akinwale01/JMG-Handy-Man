import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Image from "next/image"

export function AccordionMenu() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-4 lg:px-[188px]">
      <AccordionItem value="item-1" className="rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)] border-2 px-5 py-5 ">
          <AccordionTrigger className="font-normal text-base   [&>svg]:hidden group pt-7 md:text-[18px]"><span>How soon can you start my project?</span>
           <Image
            src="/assets/icons/plus.svg" // Replace with your image path
            alt="Toggle"
            width={40}
            height={40}
            className="transition-transform duration-500 group-data-[state=open]:rotate-360"
            />
          </AccordionTrigger>

        <AccordionContent className="accordion-content font-normal text-base data-[state=open]:accordion-open data-[state=closed]:accordion-close md:text-[18px]">
            <hr className="pb-6"/>
          <span>
          For most small jobs we will try to get to you within 24-48 hours and for larger projects we schedule you in on our next available time.
          </span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)] border-2 px-5 py-5">
        <AccordionTrigger className="font-normal text-base   [&>svg]:hidden group pt-7 md:text-[18px]"><span>Do you offer free estimates?</span>
           <Image
            src="/assets/icons/plus.svg" // Replace with your image path
            alt="Toggle"
            width={40}
            height={40}
            className="transition-transform duration-500 group-data-[state=open]:rotate-360"
          />
        </AccordionTrigger>

        <AccordionContent className="accordion-content font-normal text-base data-[state=open]:accordion-open data-[state=closed]:accordion-close md:text-[18px]">
            <hr className="pb-6"/>
          <span>
            We do offer free of charge estimates on most projects depending on the complexity of the project.
         </span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)] border-2 px-5 py-5">
        <AccordionTrigger className="font-normal text-base [&>svg]:hidden group pt-7 md:text-[18px]">
          <span>What areas do you serve?</span>
           <Image
            src="/assets/icons/plus.svg" // Replace with your image path
            alt="Toggle"
            width={40}
            height={40}
            className="transition-transform duration-500 group-data-[state=open]:rotate-360"
          />
          </AccordionTrigger>
        <AccordionContent className="accordion-content font-normal text-base data-[state=open]:accordion-open data-[state=closed]:accordion-close md:text-[18px]">
          <hr className="pb-6"/>
          <span>
          We serve Iowa City, Caravelle, North Liberty and the surrounding area.
          </span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)] border-2 px-5 py-5">
        <AccordionTrigger className="font-normal text-base [&>svg]:hidden group pt-7 md:text-[18px]">
          <span>Are you licensed and insured?</span>
           <Image
            src="/assets/icons/plus.svg" // Replace with your image path
            alt="Toggle"
            width={40}
            height={40}
            className="transition-transform duration-500 group-data-[state=open]:rotate-360"
          />
          </AccordionTrigger>
        <AccordionContent className="accordion-content font-normal text-base data-[state=open]:accordion-open data-[state=closed]:accordion-close md:text-[18px]">
          <hr className="pb-6"/>
          <span>
         Yes, we are Insured and licensed
         </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
