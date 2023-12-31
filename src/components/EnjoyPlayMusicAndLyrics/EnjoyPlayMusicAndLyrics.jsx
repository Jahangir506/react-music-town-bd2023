// Import Swiper React components
import { FaPlayCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../App.css";

// import required modules
import { EffectCoverflow } from "swiper/modules";

const EnjoyPlayMusicAndLyrics = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center text-2xl bg-black/75">
              <FaPlayCircle className="text-white text-4xl"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-full w-full">
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg" 
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center text-2xl bg-black/75">
              <FaPlayCircle className="text-white text-4xl"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-full w-full">
            <img
             src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center text-2xl bg-black/75">
              <FaPlayCircle className="text-white text-4xl"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-full w-full">
            <img
            src="https://swiperjs.com/demos/images/nature-4.jpg" 
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center text-2xl bg-black/75">
              <FaPlayCircle className="text-white text-4xl"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-full w-full">
            <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center text-2xl bg-black/75">
              <FaPlayCircle className="text-white text-4xl"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-full w-full">
            <img
             src="https://swiperjs.com/demos/images/nature-6.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center text-2xl bg-black/75">
              <FaPlayCircle className="text-white text-4xl"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-full w-full">
            <img
             src="https://swiperjs.com/demos/images/nature-7.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center text-2xl bg-black/75">
              <FaPlayCircle className="text-white text-4xl"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-full w-full">
            <img
             src="https://swiperjs.com/demos/images/nature-8.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center text-2xl bg-black/75">
              <FaPlayCircle className="text-white text-4xl"/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EnjoyPlayMusicAndLyrics;
