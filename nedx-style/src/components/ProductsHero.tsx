"use client";
import Link from 'next/link';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ProductsHero = () => {

    useEffect(() => {
        if(typeof window !== "undefined") {
            const sr = ScrollReveal({
                origin: 'bottom',
                duration: 2500,
                distance: '60px',
                delay: 0,
                reset: false,
            });
    
            sr.reveal('.productsHero-title', {
                origin: 'top',
                delay: 0,
            });
            sr.reveal('.productsHero-subtitle', {
                origin: 'left',
                delay: 100,
            });
            sr.reveal('.cta', {
                origin: 'bottom',
                delay: 1000,
            });
        }
    }, []);

    return (
        <div className="w-full h-[500px] sm:h-[530px] md:h-[600px] lg:h-[600px] relative">
            <h3 className="absolute font-extrabold sm:tracking-tight max-w-[240px] sm:max-w-[347px] lg:max-w-[540px] top-[100px] sm:top-[110px] lg:top-[50px] text-[22px] sm:text-[26px] lg:text-[40px] left-6 sm:left-6 lg:left-20 w-[68%] sm:w-[53%] lg:w-[600px] text-white z-10 drop-shadow-hero productsHero-title">
                Cada prenda cuenta una historia. ¿Cuál será la tuya?
            </h3>
            <p className="absolute leading-[15px] sm:leading-[20px] lg:leading-[30px] top-[190px] sm:top-[220px] lg:top-[210px] w-[220px] sm:w-[290px] md:w-[400px] lg:w-[400px] left-6 lg:left-[85px] text-[12px] font-normal sm:text-[16px] lg:text-[20px] text-zinc-300 drop-shadow-hero productsHero-subtitle">Renueva tu armario con lo mejor de esta temporada al mejor precio</p>
            <div className="cta">
                <Link href="/products" className="rounded-full uppercase tracking-[1.02px] flex items-center justify-center bg-black transition-all duration-[.7s] ease-in-out hover:bg-white hover:text-black text-[12px] px-4 font-medium sm:text-[18px] lg:text-[16px] sm:px-[18px] h-[40px] sm:h-[50px] absolute top-[270px] sm:top-[320px] lg:top-[350px] left-5 sm:left-5 lg:left-[80px] text-white z-10 drop-shadow-hero">
                    DESCUBRE TU ESTILO
                </Link>
            </div>
        </div>
    );
};

export default ProductsHero;