"use client";
import Image from "next/image";

const Banner = () => {

  return (
    <section className="overflow-hidden py-20 bg-white">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-1 rounded-lg bg-[#D0E9F3] p-4 sm:p-7.5 lg:p-10 xl:p-15">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start">
            {/* Contenido de texto */}
            <div className="max-w-[422px] w-full text-center lg:text-left">
              <span className="block font-medium text-custom-1 text-blue mb-2.5">
              No te lo pierdas!!
              </span>

              <h2 className="font-bold text-dark text-xl lg:text-heading-4 xl:text-heading-3 mb-3">
                Compra con confianza en hodba
              </h2>

              <p className="text-dark">Los mejores productos</p>

              {/* plus */}
              <div className="flex flex-wrap gap-6 mt-6"></div>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-blue py-3 px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
              >
                Ver Productos
              </a>
            </div>

            {/* Imagen, abajo en móviles y a la derecha en pantallas grandes */}
            <Image
              src="/imagess/coca_cola.png"
              alt="product"
              className="w-full max-w-[411px] h-auto aspect-[411/376] mt-6 lg:mt-0 mb-4 lg:ml-10 object-contain"
              width={411}
              height={376}
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Banner;
