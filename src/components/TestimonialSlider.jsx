import React from "react";
import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";
import { Autoplay, Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}>
        {testimonials.map((item, index) => {
          const { authorImg } = item;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-row justify-center">
                <div className="w-48 h-48 lg:w-[328px] lg:h-[328px] it">
                  <img className="rounded-2xl" src={authorImg} alt="img" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
