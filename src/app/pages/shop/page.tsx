import Layout from "@/components/layout";
import Shop from "@/components/Shop";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Productos",
}

export default function ShopPage() {
    
    return (
        <>
        <Layout>
            <Shop />

            <div>

            </div>
        
        
        </Layout>
        </>
    );
}
