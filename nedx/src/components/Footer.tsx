import Logo from '#assets/Logo.png';
import DevLogo from '#assets/MyLogo.png';
import { Link } from 'react-router-dom';

export const Footer = () => {

    const scrollUp = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="bg-black flex flex-col gap-[40px] lg:flex-row py-8 px-8 lg:px-16 pb-14 w-screen place-content-between place-items-center relative">
            <div className="flex flex-col items-center gap-[15px] lg:max-w-[30%] order-1">
                <p className="text-white text-center text-normal sm:text-[18px] lg:text-[18px]">Seguinos en nuestras Redes</p>
                <div className="flex w-[200px] place-content-around">
                    <i className="fa-brands fa-square-facebook text-[30px] sm:text-[40px] text-zinc-400 transition-all duration-[.3s] ease-in-out hover:text-white hover:cursor-pointer "></i>
                    <i className="fa-brands fa-instagram text-[30px] sm:text-[40px] text-zinc-400 transition-all duration-[.3s] ease-in-out hover:text-white hover:cursor-pointer "></i>
                    <i className="fa-brands fa-linkedin text-[30px] sm:text-[40px] text-zinc-400 transition-all duration-[.3s] ease-in-out hover:text-white hover:cursor-pointer "></i>
                </div>
            </div>
            <div className="order-3 lg:order-2">
                <Link to="/">
                    <img src={Logo} alt="NedX Style" className="h-[80px]" onClick={scrollUp} />
                </Link>
            </div>
            <div className="order-2 lg:order-3 flex gap-[5px] place-items-center">
                <p className="text-left text-sm w-[100px]">Developed & Designed by</p>
                <img src={DevLogo} alt="Developer & Designer" className="w-[150px] object-cover" />
            </div>
            <p className="absolute bottom-0 right-5 text-[10px] sm:text-[11px]">© 2025 Nedx Style. Todos los derechos reservados.</p>
        </div>
    );
};
