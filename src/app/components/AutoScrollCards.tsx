'use client';
import { useEffect, useRef, useState } from 'react';
export default function AutoScrollCards() {

  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) return; // Skip auto-scroll on large screens

    let interval: NodeJS.Timeout;

    if (isVisible) {
      interval = setInterval(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const newScrollLeft =
          direction === 'right'
            ? scrollContainer.scrollLeft + scrollContainer.clientWidth
            : scrollContainer.scrollLeft - scrollContainer.clientWidth;

        scrollContainer.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth',
        });

        // Reverse direction at edges
        if (newScrollLeft >= maxScroll) setDirection('left');
        else if (newScrollLeft <= 0) setDirection('right');
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isVisible, direction]);

  return (
  <div
    ref={containerRef}
    className="-mt-50 w-[400px] md:w-[600px] justify-center mx-auto lg:w-full lg:px-12 md:mt-[-160px] px-5"
  >
    <div
      ref={scrollRef}
      className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:snap-none w-full gap-4"
    >
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="snap-center min-w-full md:min-w-[600px] lg:min-w-0 flex-shrink-0 w-full p-5 flex flex-col gap-5 items-start rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)] border border-gray-300 md:px-12 lg:px-10 lg:gap-16"
        >
          <p className="text-base font-normal md:text-xl lg:text-[18px]">
            Tried their service and it was amazing! The staffs were friendly and the process was smooth. Highly recommend. They made my life so much easier. I was able to get flat fixed and to my taste in no time.
          </p>

          <div className="flex flex-row items-end w-full">
            <div className="flex gap-2 items-center">
              <div className="bg-[url(/assets/icons/Ellipse1.svg)] w-10 h-10 bg-cover bg-center" />
              <p className="text-[14px] lg:text-[18px] font-semibold">Paul Humme</p>
            </div>

            <div className="bg-[url(/assets/images/Rectangle11.png)] w-40 h-20 bg-cover bg-center ml-auto self-end" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
}