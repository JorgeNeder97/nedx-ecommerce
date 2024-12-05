import Background from '#assets/Banner2.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

export const ProductsHero = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            duration: 3000,
            distance: '60px',
            delay: 0,
            reset: false,
        });

        sr.reveal('.productsHero-title', {
            origin: 'top',
            delay: 500,
        });
        sr.reveal('.productsHero-text', {
            origin: 'left',
            delay: 1000,
        });
    }, []);

    return (
        <div className="w-screen h-[300px] sm:h-[730px] lg:h-[600px] relative">
            <img src={Background} alt="NEDX" className="absolute h-[300px] sm:h-[730px] lg:w-screen lg:h-[600px] object-cover filter brightness-[.85] z-[-1px]" loading="lazy" />
            <h3 className="absolute top-[60px] sm:top-[100px] sm:text-[42px] lg:text-[46px] left-3 lg:left-20 w-[57%] sm:w-[53%] lg:w-[600px] text-white z-10 drop-shadow-xs productsHero-title">
                Cada prenda cuenta una historia. ¿Cuál será la tuya?
            </h3>
            <Link to="/products" className="btn text-[12px] sm:text-[20px] lg:text-[16px] sm:px-7 sm:h-16 absolute top-[180px] sm:top-[500px] lg:top-[450px] left-5 sm:left-8 md:left-16 lg:left-[85px] text-white z-10 drop-shadow-xs productsHero-text">
                Ver Productos
            </Link>
        </div>
    );
};