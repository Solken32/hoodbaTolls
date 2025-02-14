"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                100%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Venta
                <br />
                Segura
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Herramientas y Materiales para Construcción</a>
            </h1>

            <p className="text-dark">
            Ofrecemos herramientas y materiales resistentes para cualquier proyecto de construcción o remodelación
            </p>

            <Link
              href="/pages/shop"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 transition ease-out duration-200 hover:bg-blue mt-10"
            >
              Shop Now
            </Link>
          </div>

          <div>
            <Image
              src="/images/home/image4.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                100%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Venta
                <br />
                Segura
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Equipos y Herramientas para Autos y Lavado de Vehículos</a>
            </h1>

            <p className="text-dark">
              Todo lo que necesitas para el mantenimiento y lavado de tu auto con calidad profesional.
            </p>

            <Link
              href="/pages/shop"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Shop Now
            </Link>
          </div>

          <div>
            <Image
              src="/images/home/image5.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
