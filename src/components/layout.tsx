import { ReactNode } from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
