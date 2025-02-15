import { Product } from "@/types/product";
import { Trash2 } from "lucide-react";
import Image from "next/image"

export default function SingleItemCart({ item }: { item: Product }){
    return ( 
    <div className="flex items-center justify-between  p-3 rounded-lg shadow-sm bg-white">
        {/* Imagen del Producto */}
        <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center">
            <Image src={item.image} alt={`Producto ${item.name}`} className="w-full h-full object-contain rounded-md" width={56} height={56} />
        </div>

        {/* Info del Producto */}
        <div className="flex-1 ml-3">
            <h3 className="text-sm font-medium text-gray-800">Producto {item.name}</h3>
            <p className="text-xs text-gray-500">S/ {item.price}</p>
        </div>
        {/* Botón de eliminar con icono */}
        <button className="text-red-500 hover:text-red-700 p-2 rounded-md transition duration-200">
            <Trash2 className="w-5 h-5" />
        </button>
    </div>
    )
}