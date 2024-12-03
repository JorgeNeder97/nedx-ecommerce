import Logo from '#assets/Logo.png';

export const Loading = () => {
    return (
        <div className="w-screen h-screen flex flex-col place-items-center place-content-center gap-10">
            <img src={Logo} alt="NEDX Style" className="w-[50%] sm:w-[30%] md:w-[25%] lg:w-[20%]" />
            <span className="loading loading-bars text-accent w-[10%] sm:w-[6%] md:w-[4%] lg:w-[3%]"></span>
        </div>
    );
};
