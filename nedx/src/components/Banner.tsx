import Background from "#assets/Banner1.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const Banner = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            duration: 3000,
            distance: '60px',
            delay: 300,
            reset: false,
        });

        sr.reveal('.banner-text', {
            origin: 'left',
            delay: 0,
            interval: 800,
        });
    }, []);

    return (
        <div className="relative h-[400px] sm:h-[730px] lg:h-[550px] flex flex-col">
            <img
                src={Background}
                alt="NEDX Style"
                className="absolute h-[400px] sm:h-[730px] lg:w-screen lg:h-[550px] object-cover filter brightness-[.85] z-[-1px]"
                loading="lazy"
            />
            <h3 className="absolute top-[100px] left-3 sm:left-6 lg:left-28 text-[24px] sm:text-[36px] lg:text-[42px] text-white z-10 drop-shadow-xs banner-text">
                Indumentaria unisex
            </h3>
            <p className="absolute top-[140px] sm:top-[180px] left-3 sm:left-6 lg:left-28 text-[20px] sm:text-[32px] lg:text-[38px] text-white z-10 drop-shadow-xs banner-text">
                Calidad Premium
            </p>
            <p className="absolute top-[180px] sm:top-[240px] left-3 sm:left-6 lg:left-28 text-[20px] sm:text-[32px] lg:text-[38px] text-white z-10 drop-shadow-xs banner-text">
                Al Mejor Precio
            </p>
        </div>
    );
};
