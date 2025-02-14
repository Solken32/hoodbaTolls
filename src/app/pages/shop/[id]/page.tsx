import Layout from '@/components/layout';
import SingleProduct from '@/components/ShopDetails';
import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalles del Producto",

}

export default async function ProductDetail({ params, }: { params: Promise<{ id: string }> }) {
  const  {id}  = await params
  return (
    <Layout>
      <SingleProduct id={id} />
    </Layout  >

  )
}