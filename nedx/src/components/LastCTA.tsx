import Background from "#assets/Banner1.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

export const LastCTA = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            duration: 2500,
            distance: '60px',
            delay: 300,
            reset: false,
        });

        sr.reveal('.LastCTA-title', {
            origin: 'left',
            delay: 0,
        });
        sr.reveal('.LastCTA-subtitle', {
            delay: 50,
        });
        sr.reveal('.LastCTA', {
            delay: 100,
        });
    }, []);

    return (
        <div className="relative h-[500px] sm:h-[700px] md:h-[900px] lg:h-[550px] flex place-content-center place-items-center px-[30px] lg:place-content-start">
            <img
                src={Background}
                alt="NEDX Style"
                className="absolute left-0 h-[500px] sm:h-[700px] md:h-[900px] lg:w-screen lg:h-[550px] object-cover object-left-top filter brightness-[.85] z-[-1px]"
                loading="lazy"
            />
            <div className="flex flex-col w-[100%] lg:w-[50vw] place-items-center place-content-center translate-y-[-15px] lg:pl-[4vw] gap-[60px]">
                <div className="flex flex-col w-[100%] gap-[10px] place-content-start">
                    <h3 className="leading-[30px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px] font-extrabold text-center lg:text-left mx-auto lg:mx-0 sm:tracking-tight max-w-[300px] sm:max-w-[397px] md:max-w-[450px] lg:max-w-[540px] sm:text-[26px] md:text-[36px] lg:text-[40px] text-white z-10 drop-shadow-hero LastCTA-title">
                        Diseñamos para quienes buscan más que moda
                    </h3>
                    <p className="leading-[15px] sm:leading-[20px] md:leading-[25px] lg:leading-[30px] w-[250px] sm:w-[300px] md:w-[450px] lg:w-[500px] text-center lg:text-left mx-auto lg:mx-0 text-[10px] font-normal sm:text-[13px] md:text-[18px] lg:text-[20px] text-zinc-300 drop-shadow-hero LastCTA-subtitle">Prendas hechas con pasión, sostenibilidad y pensando en ti. Sé parte de nuestra historia</p>
                </div>
                <div className="LastCTA flex flex-col w-[100%]">
                    <Link to="/products" className="btn-X bg-white transition-all duration-[.7s] ease-in-out hover:bg-black hover:text-white text-[10px] px-4 font-medium sm:text-[12px] md:text-[14px] lg:text-[16px] sm:px-[18px] sm:h-[50px] text-black mx-auto lg:mx-0 w-[180px] sm:w-[220px] md:w-[240px] lg:w-[280px] z-10 drop-shadow-hero">
                        ÚNETE A LA EXPERIENCIA
                    </Link>
                </div>
            </div>
        </div>
    );
};
