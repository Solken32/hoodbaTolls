import React from "react";
import Image from "next/image";
import { Categories } from "@/types/product";
  
const SingleItem = ({ item }: { item: Categories }) => {
  return (
    <a href="#" className="group flex flex-col items-center">
      <div className="max-w-[130px] w-full  h-32 rounded-full flex items-center justify-center mb-4">
        <Image src={item.image} alt={item.name} width={82} height={62} className="object-cover" />
      </div>
  
      <div className="flex justify-center">
        <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
          {item.name}
        </h3>
      </div>
    </a>
  );
};

export default SingleItem;

