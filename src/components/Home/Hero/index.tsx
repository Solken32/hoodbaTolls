import React from "react";
import HeroCarousel from "./HeroCarousel";
import Image from "next/image";
import HeroFeature from "./HeroFeature";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-15 sm:pt-15 lg:pt-15 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5 mt-2" >
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="#"> Equipamiento Profesional </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        Tu Aliado Ideal
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-blue">
                          Eficiencia
                        </span>
                        {/*<span className="font-medium text-2xl text-dark-4 line-through">
                          $999
                        </span>*/}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/home/image2.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5 mt-2">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="#"> Herramientas de Expertos </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        Calidad Garantizada
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-green">
                          Seguridad
                        </span>
                        {/*<span className="font-medium text-2xl text-dark-4 line-through">
                          $999
                        </span> */}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/home/image6.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
