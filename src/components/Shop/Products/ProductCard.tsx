
"use client"
import { useCart } from "@/components/Context/CardContext";
import { Product } from "@/types/product"
import Link from "next/link"
import {Image} from "@heroui/react";


export default function ProductItem({ item }: { item: Product }) {
    const { addToCart } = useCart();

    return (        
        <div className="group text-center">
            <Link href={`./shop/${item.id}`}>
            <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
            <Image isZoomed className="object-contain" src={item.image} alt="" width={250} height={250} />
                <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">

                    
                </div>
            </div>
            
            </Link>

                <h3 className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5">
                    <Link href={`./shop/${item.id}`}> {item.name} </Link>
                </h3>

                
                <h3 className=" gap-36font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5">
                    <span className="text-dark">S/ {item.price}</span>
                    

                </h3>

                <span className=" font-medium text-lg">
                    <button  onClick={(e) => {
                            e.preventDefault(); // Evita que el link se active al hacer clic en el botón
                            addToCart(item);
                        }} 
                            className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-blue text-white ease-out duration-200 hover:bg-blue-dark">
                        Add to cart
                        </button>
                    {/*<span className="text-dark-4 line-through">S/{item.price}</span> */}
                    
                </span>
                
        </div>
        
    
    )
}