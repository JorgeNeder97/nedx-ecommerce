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
        <div className="relative h-[400px] flex flex-col">
            <img
                src={Background}
                alt="NEDX Style"
                className="absolute h-[400px] object-cover filter brightness-[.85] z-[-1px]"
            />
            <h3 className="absolute top-[100px] left-3 text-[24px] text-white z-10 drop-shadow-xs banner-text">
                Indumentaria unisex
            </h3>
            <p className="absolute top-[140px] left-3 text-[20px] text-white z-10 drop-shadow-xs banner-text">
                Calidad Premium
            </p>
            <p className="absolute top-[180px] left-3 text-[20px] text-white z-10 drop-shadow-xs banner-text">
                Al Mejor Precio
            </p>
        </div>
    );
};
