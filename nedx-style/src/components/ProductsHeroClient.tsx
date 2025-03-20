"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/ProductsHero"), { ssr: false });

const ProductsHeroClient = () => {
    return <Hero />;
};

export default ProductsHeroClient;
