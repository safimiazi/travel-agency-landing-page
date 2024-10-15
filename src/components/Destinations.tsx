"use client";
import React from "react";
import Container from "./Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Destinations = () => {

  
  return (
    <div className="py-12 px-4">
      <Container>
        <div className="space-y-6">
          <div className="space-y-3 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Most Popular Destinations
            </h2>
            <p className="text-sm text-center max-w-[700px] text-gray-600">
              Expand your travel horizons with new facets! Explore the world by
              choosing your ideal travel destinations in Asia, Europe, America,
              Australia, and more with ShareTrip.
            </p>
          </div>
          <div>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
           
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 3000, // Adjust the delay as needed
                disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
        >
            {[
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-2.jpg",
                "https://swiperjs.com/demos/images/nature-3.jpg",
                "https://swiperjs.com/demos/images/nature-4.jpg",
                "https://swiperjs.com/demos/images/nature-5.jpg",
                "https://swiperjs.com/demos/images/nature-6.jpg",
                "https://swiperjs.com/demos/images/nature-7.jpg",
                "https://swiperjs.com/demos/images/nature-8.jpg",
                "https://swiperjs.com/demos/images/nature-9.jpg",
            ].map((src, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={src}
                        className="w-full h-[450px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        alt={`Destination ${index + 1}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Destinations;
