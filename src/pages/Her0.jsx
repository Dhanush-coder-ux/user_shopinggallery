import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { assets } from "../assets";

const Her0 = ({ isSidebarOpen }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className={`embla ${isSidebarOpen ? 'pointer-events-none overflow-visible' : ''}`}>
      {/*  Carousel */}
      <div className="embla_viewport w-full mt-5 h-[180px] sm:h-30  md:h-45 lg:h-50 xl:h-60" ref={emblaRef}>
        <div className="embla__container h-full">
          <div className="embla__slide flex items-center justify-center">
            <img src={assets.img} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <img src={assets.img} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <img src={assets.img} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Other Section */}
     
    </div>
  );
};

export default Her0;
