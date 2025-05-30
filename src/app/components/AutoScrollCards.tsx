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
    <div ref={containerRef} className="-mt-50 pl-5 pr-5 w-[400px] md:w-[600px] justify-center mx-auto lg:w-full lg:px-12 md:mt-[-160px]">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scroll-smooth snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:snap-none"
      >
        {[1, 2, 3].map((i) =>(
            <div
                key={i}
                className="flex-shrink-0 snap-center h-80 w-full  pl-5 pr-5 flex flex-col items-start gap-4 rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)] justify-center border border-gray-300"
            >

                <p className="text-base font-normal pt-6 md:text-xl">
                Tried their service and it was amazing! The staff was friendly and the process was smooth. Highly recommend. They made my life so much easier. I was able to get flat fixed and to my taste in no time.
                </p>

                <div className='flex gap-4 items-center pt-12'>
                    <div className="bg-[url('/assets/icons/Ellipse1.svg')] w-14 h-14 bg-cover" />
                    <p className='text-base font-semibold pr-3'>Paul Hume</p>

                </div>
                <div className="bg-[url('/assets/images/Rectangle11.png')] w-36 h-36 bg-cover ml-auto -mt-12"/>


            </div>
        ))}
        </div>
    </div>
  );
}