"use client"; 
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { products } from "@/data/products";

export default function SingleProduct({ id }: { id: string }){

    let product: Product | null = null;
    for (const category of products.categories) {
        for (const subcategory of category.subcategories) {
        product = subcategory.products.find((p) => p.id.toString() === id) || null;
        if (product) break;
        }
        if (product) break;
    }

    if (!product) return <p>Producto no encontrado</p>;


    const phoneNumber = "946395258";   
    const url = `http://catalogstore.vercel.app/pages/shop/${product.id}`;
    const message = encodeURIComponent(
    `Hola, estoy interesado en el producto "${product.name}". ¿Podrías darme más información?\n${url}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;   
    


    return (
            <section className="bg-white overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-15">
                    <div className=" bg-white max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="bg-white flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
                        <div className="lg:max-w-[570px] w-full">
                        <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center justify-center">
                            <div>
                            
                            <Image
                                src={product.image}
                                alt="products-details"
                                width={400}
                                height={400}
                            />
                            </div>
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
                            <div className="text-center flex flex-wrap items-center gap-4.5">
                            <Link
                                href={whatsappUrl}
                                target="_blank"
                                className=" flex items-center gap-12 font-medium text-white bg-green py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                            >
                                Finalizar compra por Whatsapp  
                            <div className="place-items-end">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                                    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                            </svg>
                            </div>
                                
                            </Link>
                            
                            </div>
                        
                        </div>
                    </div>
                    </div>
                </section>
        
    );
    
}