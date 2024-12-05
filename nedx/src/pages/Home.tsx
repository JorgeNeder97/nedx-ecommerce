import { Banner } from "#components/Banner.tsx";
import { Footer } from "#components/Footer.tsx";
import { Info } from "#components/Info.tsx";
import { Loading } from "#components/Loading.tsx";
import { Nav } from "#components/Nav.tsx";
import { ProductsHero } from "#components/ProductsHero.tsx";
import usePageLoad from "#hooks/usePageLoad.ts";
import { useRef, useEffect } from "react";


export const Home = () => {
    const { isLoading, observeImages } = usePageLoad();

    const bannerRef = useRef<HTMLDivElement>(null);
    const productsHeroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(bannerRef.current && productsHeroRef.current) {
            const bannerImages = bannerRef.current.querySelectorAll("img");
            const productsHeroImages = productsHeroRef.current.querySelectorAll("img");

            observeImages(bannerImages);
            observeImages(productsHeroImages);
        }
    }, [observeImages])

    if (isLoading) {
        return <Loading />;
    } else
        return (
            <div>
                <Nav />
                <div ref={bannerRef}>
                    <Banner />
                </div>
                <Info />
                <div ref={productsHeroRef}>
                    <ProductsHero />
                </div>
                <Footer />
            </div>
        );
};
