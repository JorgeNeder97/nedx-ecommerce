import algodonImg from "#assets/Algodón.jpg";
import costuraImg from "#assets/Costura.jpg";
import tintesImg from "#assets/Tintes.jpg";
import diseñoImg from "#assets/Diseños.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const Features = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            duration: 3000,
            distance: '30px',
            delay: 0,
            reset: false,
        });

        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;

        if(innerWidth < 1024) {
            sr.reveal('.featureCardOne, .featureCardTwo');
            if(innerHeight < 689) {
                sr.reveal('.firstTitle', { origin: 'left' });
                sr.reveal('.divider', { origin: 'left' });
                sr.reveal('.secondTitle', { origin: 'right' });
                sr.reveal('.thirdTitle', { origin: 'top' });
            } else if(innerHeight >= 798) {
                sr.reveal('.firstTitle', { origin: 'left', delay: 2300 });
                sr.reveal('.divider', { origin: 'left', delay: 2300 });
                sr.reveal('.secondTitle', { origin: 'right', delay: 2300 });
                sr.reveal('.thirdTitle', { origin: 'top', delay: 2900});
            }
            else if(innerHeight >= 689) {
                if(innerHeight < 798) {
                    sr.reveal('.firstTitle', { origin: 'left', delay: 2300 });
                    sr.reveal('.divider', { origin: 'left', delay: 2300 });
                    sr.reveal('.secondTitle', { origin: 'right', delay: 2300 });
                    sr.reveal('.thirdTitle', { origin: 'top', delay: 0});
                }
            }
        } else {
            sr.reveal('.firstTitle', { origin: 'left' });
            sr.reveal('.divider', { origin: 'left' });
            sr.reveal('.secondTitle', { origin: 'right' });
            sr.reveal('.thirdTitle', { origin: 'top', delay: 300 });
            sr.reveal('.featureCardOne', { origin: 'right', delay: 0 });
            sr.reveal('.featureCardTwo', { origin: 'left', delay: 0 });
        }
    }, []);

    return (
        // Contenedor General
        <div className="bg-black py-[50px] px-[20px] lg:pt-[180px] lg:pb-[100px] flex flex-col gap-[100px] lg:gap-[200px]">
            {/* Contenedor de titulos */}
            <div className="flex flex-col gap-[100px] lg:gap-[180px]">
                <div className="flex flex-col gap-[5px]">
                    <h3 className="text-[22px] md:text-[26px] lg:text-[40px] text-center firstTitle">
                        <span className="text-white">CALIDAD </span>
                        <span className="text-zinc-400">QUE PUEDES </span>
                        <span className="text-white">SENTIR</span>
                    </h3>
                    <div className="border-[1px] border-tertiary h-[1px] w-[240px] lg:w-[340px] m-auto divider"></div>
                    <h3 className="text-[22px] md:text-[26px] lg:text-[40px] text-center secondTitle">
                        <span className="text-white">IMPACTO </span>
                        <span className="text-zinc-400">QUE PUEDES </span>
                        <span className="text-white">VER</span>
                    </h3>
                </div>
                <div>
                    <h4 className="text-[18px] md:text-[20px] lg:text-[26px] text-secondary text-center thirdTitle">
                        LO QUE HACE ÚNICAS NUESTRAS PRENDAS
                    </h4>
                </div>
            </div>
            {/* Contenedor de features (cada feature debe usar grid) */}
            <div className="flex flex-col gap-[150px] place-items-center">
                <div className="featureCardOne">
                    <h3 className="text-[22px] lg:text-[26px] text-tertiary text-center m-0 area-[Title] self-end">
                        ALGODÓN ORGÁNICO
                    </h3>
                    <p className="leading-[20px] md:leading-[25px] lg:leading-[35px] text-[12px] lg:text-[16px] lg:tracking-wide text-justify area-[Text] place-self-end">
                        Nuestro algodón es suave al tacto, libre de químicos
                        dañinos y cultivado de manera sostenible. Esto no solo
                        te ofrece una prenda cómoda y transpirable, sino que
                        también contribuye al cuidado del medio ambiente y al cuidado de tu
                        piel.
                    </p>
                    <img
                        className="h-[200px] lg:h-[300px] w-[100%] object-cover rounded-xl area-[Image]"
                        src={algodonImg}
                        alt="Algodón Orgánico"
                    />
                </div>
                <div className="featureCardTwo">
                    <h3 className="text-[22px] lg:text-[26px] text-tertiary text-center m-0 area-[Title] self-end">
                        COSTURAS REFORZADAS
                    </h3>
                    <p className="leading-[20px] md:leading-[25px] lg:leading-[35px] text-[12px] lg:text-[16px] lg:tracking-wide text-justify area-[Text] place-self-end">
                        Sabemos que buscas ropa que acompañe tu ritmo de vida.
                        Por eso, cada prenda está confeccionada con costuras
                        reforzadas que aumentan su durabilidad. Puedes confiar
                        en que nuestra ropa estará contigo por mucho tiempo, sin
                        importar cuántas veces la uses o laves.
                    </p>
                    <img
                        className="h-[200px] lg:h-[300px] w-[100%] object-cover rounded-xl area-[Image]"
                        src={costuraImg}
                        alt="Costuras Reforzadas"
                    />
                </div>
                <div className="featureCardOne">
                    <h3 className="text-[22px] lg:text-[26px] text-tertiary text-center m-0 area-[Title] self-end">
                        TINTES ECOLÓGICOS
                    </h3>
                    <p className="leading-[20px] md:leading-[25px] lg:leading-[35px] text-[12px] lg:text-[16px] lg:tracking-wide text-justify area-[Text] place-self-end">
                        Queremos que cada prenda luzca impecable. 
                        Por eso, utilizamos tintes ecológicos
                        de alta calidad que no solo cuidan el planeta, sino que
                        también garantizan colores vibrantes y duraderos. Al
                        elegirnos, estás invirtiendo en ropa que siempre se verá
                        como nueva.
                    </p>
                    <img
                        className="h-[200px] lg:h-[300px] w-[100%] object-cover rounded-xl area-[Image]"
                        src={tintesImg}
                        alt="Tintes Ecológicos"
                    />
                </div>
                <div className="featureCardTwo">
                    <h3 className="text-[22px] lg:text-[26px] text-tertiary text-center m-0 area-[Title] self-end">
                        DISEÑOS MODERNOS
                    </h3>
                    <p className="leading-[20px] md:leading-[25px] lg:leading-[35px] text-[12px] lg:text-[16px] lg:tracking-wide text-justify area-[Text] place-self-end">
                        Creemos que la moda debe combinar estilo y
                        funcionalidad. Nuestros diseños están pensados para
                        ofrecerte versatilidad y ajustarse a tu día a día.
                        Siempre estarás a la moda sin preocuparte por tendencias
                        pasajeras, porque cada prenda está diseñada para perdurar en el tiempo.
                    </p>
                    <img
                        className="h-[200px] lg:h-[300px] w-[100%] object-cover rounded-xl area-[Image]"
                        src={diseñoImg}
                        alt="Diseños Modernos"
                    />
                </div>
            </div>
        </div>
    );
};
