"use client";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Cards = () => (
  <div className="max-w-[200px] border rounded-md border-gray-500 mx-3 sm:px-5 px-2">
    <div className="flex items-center justify-center py-3 border-b-2 border-gray-400">
      <a href="#">
        <Image
          className="rounded-t-lg"
          src="/assets/images/lambo.png"
          alt="car"
          height={30}
          width={100}
        />
      </a>
    </div>
    <div className="p-5 flex flex-col">
      <div className="flex flex-col justify-center">
        <p className="text-center  text-sm text-slate-50">Porsche Tagra-4</p>
        <p className="text-center text-sm text-slate-500">$150.00</p>
      </div>
      <Link
        href="/"
        className=" flex items-center justify-center border border-slate-500 rounded-md py-2 my-2 text-slate-500 "
      >
        View Car
      </Link>
    </div>
  </div>
);

const HeroCarousel = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={3}
        autoplay={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="my-4"
      >
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <IoArrowBackCircleOutline className="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <IoArrowForwardCircleOutline className="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
