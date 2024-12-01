import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const Info = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            duration: 2000,
            distance: '30px',
            delay: 900,
            reset: false,
        });

        sr.reveal('.mini-card', {
            origin: 'top',
            interval: 100,
        });
    }, []);

    return (
        <div className="w-screen flex place-content-around py-10">
            <div className="mini-card">
                <i className="fa-solid fa-store text-white text-[30px] drop-shadow-xs"></i>
                <p className="text-sm text-center drop-shadow-xs">Más de 20 sucursales</p>
            </div>
            <div className="mini-card">
                <i className="fa-solid fa-credit-card text-white text-[30px] drop-shadow-xs"></i>
                <p className="text-sm text-center drop-shadow-xs">Medios de pago</p>
            </div>
            <div className="mini-card">
                <i className="fa-solid fa-truck text-white text-[30px] drop-shadow-xs"></i>
                <p className="text-sm text-center drop-shadow-xs">Envíos a todo el país</p>
            </div>
        </div>
    );
};
