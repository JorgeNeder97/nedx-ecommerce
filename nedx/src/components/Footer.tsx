import fc from '#assets/facebook.png';
import inst from '#assets/instagram.png';
import tt from '#assets/tik-tok.png';

export const Footer = () => {
    return (
        <div className="bg-white/20 flex flex-col py-10 relative">
            <div className="flex flex-col items-center gap-5">
                <p className="text-white text-center text-[20px]">Seguinos en nuestras Redes</p>
                <div className="flex w-[200px] place-content-around">
                    <img src={inst} alt="" className="w-[40px] hover:cursor-pointer" />
                    <img src={fc} alt="" className="w-[40px] hover:cursor-pointer" />
                    <img src={tt} alt="" className="w-[40px] hover:cursor-pointer" />
                </div>
            </div>
            <p className="absolute bottom-0 right-3 text-[11px]">Copyright © 2024 Nedx Style. Todos los derechos reservados.</p>
        </div>
    );
};