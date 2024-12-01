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
            delay: 1500,
        });
    }, []);

    return (
        <div className="w-screen h-[300px] relative">
            <img src={Background} alt="NEDX" className="absolute h-[300px] object-cover filter brightness-[.85] z-[-1px]" />
            <h3 className="absolute top-[60px] left-3 w-[60%] text-white z-10 drop-shadow-xs productsHero-title">
                Cada prenda cuenta una historia. ¿Cuál será la tuya?
            </h3>
            <Link to="/" className="btn absolute top-[180px] left-5 text-white z-10 drop-shadow-xs productsHero-text">
                Ver Productos
            </Link>
        </div>
    );
};
