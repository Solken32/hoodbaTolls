"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import CartModal from "../Common/CartSidebarModal";
import { useCart } from "../Context/CardContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full  bg-white shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-bold text-lg text-dark">
          HodTools
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-dark">
          <Link href="/pages/shop" className="text-sm font-medium hover:text-gray-600">
            Products
          </Link>
            {/* <Link href="#" className="text-sm font-medium hover:text-gray-600">
            Categories
          </Link> */}
          <Link href="#" className="text-sm font-medium hover:text-gray-600">
            About
          </Link>
          
            <button className="relative p-0" onClick={() => setCartOpen(true)}>
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                  <span className="bg-dark absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          
            <button className="relative p-0" onClick={() => setCartOpen(true)}>
              <ShoppingCart className="h-6 w-6 text-dark " />
              {totalItems > 0 && (
                  <span className="bg-dark absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          
          <button className="p-2" onClick={() => setMenuOpen(true)}>
            <Menu className="h-6 w-6 text-dark" />
          </button>
        </div>
      </div>

      {/* Menú lateral */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}>
          <aside className="fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg p-4">
            <button onClick={() => setMenuOpen(false)} className="mb-4">
              <X className="h-6 w-6 text-dark" />
            </button>
            <nav className="flex flex-col space-y-4 text-dark">
              <Link href="/pages/shop" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>Products</Link>
              {/* <Link href="#" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>Categories</Link>
              <Link href="#" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>About</Link>
              <Button size="lg" variant="outline">Shop Now</Button> */}
              <Button size="lg" variant="outline">
                <Link href="/pages/shop" onClick={() => setMenuOpen(false)}>
                  Comprar
                </Link>
              </Button>
            </nav>
          </aside>
        </div>
      )}
 
      {cartOpen && (
        <CartModal setCartOpen={setCartOpen}/>
      )} 

    </header>
  );
}
