"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Nav = () => {

    const asideRef = useRef<HTMLDivElement | null>(null);

    const handleButtonChange = () => {
        const asideElement = asideRef.current;
        asideElement ? asideElement.classList.toggle("translate-x-0") : "";
    }

    return (
        <div className="flex w-full pl-10 py-3 bg-black/90 text-tertiary shadow-c1 place-items-center sticky top-[-1px] text- z-40 lg:flex lg:place-content-between lg:pr-20">
            <Link href="/">
                <img src="/Logo.png" alt="NEDX" className="w-[80px] pt-[3px] outline-none" />
            </Link>
            <label className="absolute top-[20px] right-5 z-50 swap swap-rotate lg:hidden outline-none">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={handleButtonChange} />

                {/* hamburger icon */}
                <svg
                    className="swap-off fill-white duration-[.2s] outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 512 512"
                >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                    className="swap-on fill-white duration-[.2s] outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 512 512"
                >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </label>
            <div className="fixed top-[83px] shadow-c3 right-0 z-40 translate-x-[100%] bg-black/90 w-[65vw] max-w-[400px] h-screen flex flex-col place-items-center text-3xl text-white transition-transform duration-[.8s] ease-in-out" ref={asideRef}>
                <Link href="/products" className="w-full h-[100px] border-t-[1px] text-xl sm:text-[26px] border-white/20 flex place-content-center place-items-center">Productos</Link>
                <Link href="/" className="w-full h-[100px] border-t-[1px] text-xl sm:text-[26px] border-white/20 flex place-content-center place-items-center">Contacto</Link>
                <Link href="/" className="w-full h-[100px] border-t-[1px] text-xl sm:text-[26px] border-white/20 flex place-content-center place-items-center">Ingresar</Link>
            </div>
            <div className="hidden lg:flex lg:gap-10 lg:relative">
                <Link href="/products" className="link drop-shadow-xs text-[18px] absolute top-[-15px] right-[260px]"><motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Productos</motion.p></Link>
                <Link href="/" className="link drop-shadow-xs text-[18px] absolute top-[-15px] right-[145px]"><motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Contacto</motion.p></Link>
                <Link href="/" className="link drop-shadow-xs text-[18px] absolute top-[-15px] right-[40px]"><motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Ingresar</motion.p></Link>
            </div>
        </div>
    );
};
