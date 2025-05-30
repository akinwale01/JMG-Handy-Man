import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Image from "next/image"

export function AccordionMenu() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)] border-0 mb-6">
          <AccordionTrigger className="font-normal text-base pt-15 px-5  pb-10  [&>svg]:hidden group "><span>How soon can you start my project?</span>
<           Image
            src="/assets/icons/plus.svg" // Replace with your image path
            alt="Toggle"
            width={40}
            height={40}
            className="transition-transform duration-500 group-data-[state=open]:rotate-360"
            />
          </AccordionTrigger>
        <hr className="border-[rgba(0,0,0,0.04)] "/>
        <AccordionContent className="accordion-content font-normal text-base p-5 data-[state=open]:accordion-open data-[state=closed]:accordion-close pb-15 pt-10">
          For most small jobs we will try to get to you within 24-48 hours and for larger projects we schedule you in on our next available time.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)] border-0 mb-6">
        <AccordionTrigger className="font-normal text-base pt-15 px-5  pb-10 [&>svg]:hidden group"><span>Do you offer free estimates?</span>
           <Image
            src="/assets/icons/plus.svg" // Replace with your image path
            alt="Toggle"
            width={40}
            height={40}
            className="transition-transform duration-500 group-data-[state=open]:rotate-360"
          />
        </AccordionTrigger>
        <hr className="border-[rgba(0,0,0,0.04)] "/>
        <AccordionContent className="accordion-content font-normal text-base p-5 data-[state=open]:accordion-open data-[state=closed]:accordion-close pb-15 pt-10">
         We do offer free of charge estimates on most projects depending on the complexity of the project.

        </AccordionContent>
      </AccordionItem>

     <AccordionItem value="item-3" className="rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)] border-0 mb-6">
        <AccordionTrigger className="font-normal text-base pt-15 px-5 pb-10 [&>svg]:hidden group ">
          <span>What areas do you serve?</span>
           <Image
            src="/assets/icons/plus.svg" // Replace with your image path
            alt="Toggle"
            width={40}
            height={40}
            className="transition-transform duration-500 group-data-[state=open]:rotate-360"
          />
          </AccordionTrigger>
        <hr className="border-[rgba(0,0,0,0.04)] "/>
        <AccordionContent className="accordion-content font-normal text-base p-5 data-[state=open]:accordion-open data-[state=closed]:accordion-close pb-15 pt-10">
          We serve Iowa City, Caravelle, North Liberty and the surrounding area.
        </AccordionContent>
      </AccordionItem>

            <AccordionItem value="item-4" className="rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)] border-0 ">
        <AccordionTrigger className="font-normal text-base pt-15 px-5   pb-10 [&>svg]:hidden group">
          <span>Are you licensed and insured?</span>
           <Image
            src="/assets/icons/plus.svg" // Replace with your image path
            alt="Toggle"
            width={40}
            height={40}
            className="transition-transform duration-500 group-data-[state=open]:rotate-360"
          />
          </AccordionTrigger>
        <hr className="border-[rgba(0,0,0,0.04)] "/>
        <AccordionContent className="accordion-content font-normal text-base p-5 data-[state=open]:accordion-open data-[state=closed]:accordion-close pb-15 pt-10">
         Yes, we are Insured and licensed
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
