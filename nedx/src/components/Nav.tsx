import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from "#assets/Logo.png";

export const Nav = () => {

    const asideRef = useRef<HTMLDivElement | null>(null);

    const handleButtonChange = () => {
        const asideElement = asideRef.current;
        asideElement ? asideElement.classList.toggle("translate-x-0") : "";
    }

    return (
        <div className="nav-display">
            <Link to="/">
                <img src={Logo} alt="NEDX" className="w-[80px] pt-[3px] outline-none" />
            </Link>
            <label className="absolute top-[20px] right-5 z-50 swap swap-rotate lg:hidden outline-none">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={handleButtonChange} />

                {/* hamburger icon */}
                <svg
                    className="swap-off fill-white duration-[.2s] outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 512 512"
                >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                    className="swap-on fill-white duration-[.2s] outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 512 512"
                >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </label>
            <div className="mobile-menu" ref={asideRef}>
                <Link to="/products" className="mobile-menu-link">Productos</Link>
                <Link to="/" className="mobile-menu-link">Contacto</Link>
                <Link to="/" className="mobile-menu-link">Ingresar</Link>
            </div>
            <div className="hidden lg:flex lg:gap-10 lg:relative">
                <Link to="/products" className="link drop-shadow-xs text-[18px] absolute top-[-15px] right-[260px] hover:right-[255px]">Productos</Link>
                <Link to="/" className="link drop-shadow-xs text-[18px] absolute top-[-15px] right-[145px] hover:right-[135px]">Contacto</Link>
                <Link to="/" className="link drop-shadow-xs text-[18px] absolute top-[-15px] right-[30px] hover:right-[25px]">Ingresar</Link>
            </div>
        </div>
    );
};
