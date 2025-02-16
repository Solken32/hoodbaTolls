"use client"; 


import { Product } from "@/types/product";
import { products } from "@/data/products";
import { useCart } from "../Context/CardContext";
import ProductInformation from "./productespecification";

import { ChevronLeft, ChevronRight} from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {Image} from "@heroui/react";

export default function SingleProduct({ id }: { id: string }){

    // Para agregar al carrito
    const { addToCart } = useCart();

    let product: Product | null = null;
    for (const category of products.categories) {
        for (const subcategory of category.subcategories) {
        product = subcategory.products.find((p) => p.id.toString() === id) || null;
        if (product) break;
        }
        if (product) break;
    }

    if (!product) return <p>Producto no encontrado</p>;
 

    return (
        <> 
            <section className="bg-white overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-15">
                    <div className=" bg-white max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="bg-white flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
                        <div className="lg:max-w-[570px] w-full">
                        <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center justify-center">
        
                            {/* Botón de Retroceder */}
                            <button className=" text-dark absolute left-2 z-10 bg-white p-2 rounded-full shadow-md" id="prevBtn">
                                <ChevronLeft size={30} />
                            </button>

                            {/* Slider de fotos del producto */}
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation={{ nextEl: "#nextBtn", prevEl: "#prevBtn" }}
                                modules={[Navigation]}
                                className="w-full max-w-2xl"
                                >
                                <SwiperSlide>
                                    <div className="flex justify-center">
                                        <Image
                                            isZoomed
                                            src={product.image}
                                            alt="products-details"
                                            width={400}
                                            height={400}
                                            className="object-contain"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex justify-center">
                                        <Image
                                            isZoomed
                                            src={product.image2}
                                            alt="products-details"
                                            width={400}
                                            height={400}
                                            className="object-contain"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex justify-center">
                                        <Image
                                            isZoomed
                                            src={product.image3}
                                            alt="products-details"
                                            width={400}
                                            height={400}
                                            className="object-contain"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                                {/* Botón de Avanzar */}
                            <button className="absolute right-2 z-10 bg-white text-dark p-2 rounded-full shadow-md" id="nextBtn">
                                <ChevronRight size={30} />
                            </button>

                        </div>
        
                        {/* ?  &apos;border-blue &apos; :  &apos;border-transparent&apos; */}
                        {/* <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
                            
                                <Image
                                width={50}
                                height={50}
                                src={product.image}
                                alt="thumbnail"
                                />
                            
                        </div> */}
                        
                        </div>
        
                        {/* <!-- product content --> */}
                        <div className="max-w-[539px] w-full">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-semibold text-xl sm:text-2xl xl:text-custom-3 text-dark">
                            {product.name}
                            </h2>
        
                            <div className="inline-flex font-medium text-custom-sm text-white bg-blue rounded py-0.5 px-2.5">
                            NEW
                            </div>
                        </div>
        
                        <div className="flex flex-wrap items-center gap-5.5 mb-4.5">
                            {/*<div className="flex items-center gap-2.5">
                             <!-- stars --> 
                            <div className="flex items-center gap-1">
                                <svg
                                className="fill-[#FFA645]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_375_9172)">
                                    <path
                                    d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                                    fill=""
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_375_9172">
                                    <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
        
                                <svg
                                className="fill-[#FFA645]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_375_9172)">
                                    <path
                                    d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                                    fill=""
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_375_9172">
                                    <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
        
                                <svg
                                className="fill-[#FFA645]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_375_9172)">
                                    <path
                                    d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                                    fill=""
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_375_9172">
                                    <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
        
                                <svg
                                className="fill-[#FFA645]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_375_9172)">
                                    <path
                                    d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                                    fill=""
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_375_9172">
                                    <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
        
                                <svg
                                className="fill-[#FFA645]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_375_9172)">
                                    <path
                                    d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                                    fill=""
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_375_9172">
                                    <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
                            </div> 
        
                            <span className="text-dark"> (5 customer reviews) </span>
                            </div> */}
        
                            <div className="flex items-center gap-1.5">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_375_9221)">
                                <path
                                    d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                                    fill="#22AD5C"
                                />
                                <path
                                    d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                                    fill="#22AD5C"
                                />
                                </g>
                                <defs>
                                <clipPath id="clip0_375_9221">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                                </defs>
                            </svg>
        
                            <span className="text-green"> Quality </span>
                            </div>
                        </div>
        
                        <h3 className="font-medium text-custom-1 mb-4.5">
                            <span className="text-sm sm:text-base text-dark">
                            Precio:
                            </span>
                            <span className="text-dark ">
                            {" "}
                            S/{product.price}{" "}
                            </span>
                        </h3>
        

                        <div className="flex flex-col gap-4.5 border-y border-gray-3 mt-7.5 mb-9 py-9">
                            
                            {/* <!-- details item --> */}
                            <div className="flex items-center gap-4">
                                <div className="min-w-[65px]">
                                <h4 className="font-semibold text-dark mb-4">Descripción</h4>
                                <h4 className="text-sm text-dark">{product.description}</h4>
                                </div>
        
                                
                            </div>
                            
        
                            {/* // <!-- details item --> 
                            <div className="flex items-center gap-4">
                                <div className="min-w-[65px]">
                                <h4 className="font-medium text-dark">Type:</h4>
                                </div>
        
                                <div className="flex items-center gap-4">
                                
                                </div>
                            </div> */}
    
                        </div>
                            <div className="text-center flex flex-wrap items-center gap-4 bg-white">
                                
                                {/* Botón de Añadir al Carrito */}
                                <button  onClick={(e) => {
                                    e.preventDefault(); // Evita que el link se active al hacer clic en el botón
                                    addToCart(product);
                                }} 
                                    className="bg-blue text-white  font-medium py-3 px-5 rounded-md ease-out duration-200 flex items-center gap-4">
                                    Añadir al carrito
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                </button>
                            
                            </div>
                        
                        </div>
                    </div>
                    </div>
            </section>

            <ProductInformation item={product} />
        </>
    );
    
}