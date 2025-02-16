import { ReactNode } from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { CartProvider } from "./Context/CardContext";
import { Providers } from "@/app/providers";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Providers>
        <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </CartProvider>
      </Providers>
      
      
    </div>
  );
}
