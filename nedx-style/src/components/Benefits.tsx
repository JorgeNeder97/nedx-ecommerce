import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const Benefits = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            duration: 3000,
            distance: '30px',
            delay: 0,
            reset: false,
        });

        sr.reveal('.title', { origin: 'top'});
        sr.reveal('.mini-card', {
            origin: 'top',
            interval: 100,
            delay: 800,
        });
    }, []);

    return (
        <div className="flex flex-col gap-[10px] md:gap-[25px] py-[50px] md:pt-[40px] md:pb-[80px] bg-black">
            <div>
                <h3 className="font-bold text-center text-[16px] md:text-[26px] text-tertiary title">PORQUE PENSAMOS EN TU COMODIDAD</h3>
            </div>
            <div className="w-screen flex place-content-around py-10 px-[20px] mx-auto md:max-w-[600px] lg:max-w-[600px] lg:m-auto">
                <div className="mini-card">
                    <i className="fa-solid fa-store text-white text-[30px] sm:text-[30px] lg:text-[40px] drop-shadow-xs"></i>
                    <p className="font-normal text-sm sm:text-[14px] lg:text-[16px] text-center drop-shadow-xs">Más de 20 sucursales</p>
                </div>
                <div className="mini-card">
                    <i className="fa-solid fa-credit-card text-white text-[30px] sm:text-[30px] lg:text-[40px] drop-shadow-xs"></i>
                    <p className="font-normal text-sm sm:text-[14px] lg:text-[16px] text-center drop-shadow-xs">Medios de pago</p>
                </div>
                <div className="mini-card">
                    <i className="fa-solid fa-truck text-white text-[30px] sm:text-[30px] lg:text-[40px] drop-shadow-xs"></i>
                    <p className="font-normal w-[90px] text-sm sm:text-[14px] lg:text-[16px] text-center drop-shadow-xs">Envíos a todo el país</p>
                </div>
            </div>
        </div>
    );
};
