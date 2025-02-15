"use client"
import { useCart } from "@/components/Context/CardContext";
import { CartItem } from "@/types/product";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Trash2 } from "lucide-react";
import Image from "next/image";


declare module "jspdf" {
    interface jsPDF {
        lastAutoTable?: { finalY: number };
    }
}

const handleGenerateInvoice = (cartItems: CartItem[]) => {
    if (!cartItems || cartItems.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de generar la boleta.");
        return;
    }

    const doc = new jsPDF();

    // **Encabezado**
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("BOLETA DE COMPRA", 75, 10);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 10, 20);

    // **Tabla con los productos**
    const tableColumn = ["Ítem", "Descripción", "Cantidad", "Precio Unitario", "Subtotal"];
    const tableRows: string[][] = [];
    let total = 0;

    cartItems.forEach((item, index) => {
        const subtotal = item.quantity * item.price;
        total += subtotal;
        tableRows.push([
            (index + 1).toString(),
            item.name,
            item.quantity.toString(),
            `S/.${item.price.toFixed(2)}`,
            `S/.${subtotal.toFixed(2)}`
        ]);
    });

    autoTable(doc, {
        startY: 40,
        head: [tableColumn],
        body: tableRows,
        theme: "grid",
        styles: { fontSize: 10 },
    });

    // **Total de la compra**
    const lastTableY = doc.lastAutoTable?.finalY || 50; 
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Total: S/.${total.toFixed(2)}`, 140, lastTableY + 10);

    // **Generar y descargar el PDF**
    const pdfBlob = doc.output("blob");
    const url = URL.createObjectURL(pdfBlob);

    // **Enlace de WhatsApp**
    const mensaje = `🌞 *¡Hola, muy buenos días!* 🌞\n\n📅 *Fecha:* ${Date}\n\n📝 *Detalle del pedido:*\n📄 *Adjuntaré el PDF que se descargó.*\n\n💰 *Total a pagar: S/.${total.toFixed(2)}*\n\n✅ *Me interesa hacer la compra de lo que he presentado.* Por favor, confírmame la disponibilidad y los pasos a seguir. ¡Gracias! 😊`;
    const whatsappUrl = `https://wa.me/51946395258?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");

    // Descargar el PDF automáticamente
    const a = document.createElement("a");
    a.href = url;
    a.download = "boleta_compra.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

interface CartModalProps {
    setCartOpen: (open: boolean) => void;
}

export default function CartModal ({ setCartOpen }: CartModalProps) {
    const { cart, removeFromCart } = useCart();
    
  // Calcular el total de la compra
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return ( 
    
            <div className="text-dark fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform z-50 p-5">
                
                <div className="flex justify-between items-center  pb-3 mt-4">
                    <h2 className="text-lg font-semibold">Carrito</h2>
                    <button  onClick={() => setCartOpen(false)}  className="text-gray-500 hover:text-black">✖</button>
                </div>

                <div className="mt-5 space-y-4 max-h-[60vh] overflow-y-auto">
                    {cart.length > 0 ? (
                        cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between  p-3 rounded-lg shadow-sm bg-white"
                            >
                            {/* Imagen del Producto */}
                            <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center">
                                <Image src={item.image} alt={`Producto ${item.name}`} className="w-full h-full object-contain rounded-md" width={56} height={56} />
                            </div>

                            {/* Info del Producto */}
                            <div className="flex-1 ml-3">
                                <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
                                <p className="text-sm text-gray-500">Und: {item.quantity}</p>
                                <p className="text-xs text-gray-500">S/ {item.price}</p>
                            </div>
                            <span className="font-medium">S/ {(item.price * item.quantity).toFixed(2)}</span>
                            {/* Botón de eliminar con icono */}
                            <button  onClick={() => removeFromCart(item.id)}  className="text-red-500 hover:text-red-700 p-2 rounded-md transition duration-200">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                        ))
                    ) : ( 
                        <p className="text-center text-gray-500 mt-5">Tu carrito está vacío</p>
                    )}

                </div>
                
                
                {/* Total */}
                <div className="bg-white mt-5 pt-3 flex justify-between items-center">
                    <span className="text-dark font-semibold text-lg">Total:</span>
                    <span className="text-dark text-lg font-bold">S/ {totalPrice}</span>
                </div>

                {/* Botones */}
                <div className=" bg-white  mt-6 flex flex-col gap-2">
                <button  onClick={() => handleGenerateInvoice(cart)} className="bg-green text-white  font-medium py-3 px-5 rounded-md ease-out duration-200 flex items-center gap-4">
                    Finalizar compra por Whatsapp
                </button>
                </div>
                
            </div>
        
        
    )
}