import React from "react";
import Image from "next/image";
{/* import Link from "next/link"; */}

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20 bg-white">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> 
        <div className="flex items-center gap-10 relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              Apple iPhone 14 Plus
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              UP TO 30% OFF
            </h2>

            <p className="text-dark font-euclid-circular-A">
              iPhone 14 has the same superspeedy chip that’s in iPhone 13 Pro,
              A15 Bionic, with a 5‑core GPU, powers all the latest features.
            </p>

            <Link
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Buy Now
            </Link>
          </div>

          <Image
            src="/images/promo/promo-01.png"
            alt="promo img"
            className="hidden sm:block  absolute bottom-0 right-4 lg:right-26 -z-1"
            width={274}
            height={350}
          />
        </div> */}

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/home/image3.png"
              alt="promo img"
              className="hidden sm:block absolute top-1  left-3 sm:left-10 -z-1"
              width={241}
              height={241}
            />

            <div className="text-right">
              <span className="block font-euclid-circular text-lg text-dark mb-1.5">
                Esenciales para Limpieza de Autos
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Renueva tu vehículo
              </h2>

              <p className="font-semibold text-custom-1 text-teal">
                No lo pienses mas
              </p>

              {/* <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9"
              >
                Grab Now
              </a> */}
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/home/image1.png"
              alt="promo img"
              className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              width={230}
              height={300}
            />

            <div>
              <span className="block font-euclid-circular text-lg text-dark mb-1.5">
              Kit de Herramientas Eléctricas
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Prcio<span className="text-orange"> Bajos</span> siempre
              </h2>

              <p className="max-w-[285px] font-euclid-circular text-custom-sm text-dark">
                Construye con Precisión
              </p>

              {/*<a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
              >
                Buy Now
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
