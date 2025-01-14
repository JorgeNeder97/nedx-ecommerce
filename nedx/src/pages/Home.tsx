import { LastCTA } from "#components/LastCTA.tsx";
import { Features } from "#components/Features.tsx";
import { Footer } from "#components/Footer.tsx";
import { Benefits } from "#components/Benefits.tsx";
import { Loading } from "#components/Loading.tsx";
import { Nav } from "#components/Nav.tsx";
import { ProductsHero } from "#components/ProductsHero.tsx";
import usePageLoad from "#hooks/usePageLoad.ts";
import { useRef, useEffect } from "react";
import useScrollToTop from "#hooks/useScrollToTop.ts";

export const Home = () => {

    useScrollToTop();
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
    }, [observeImages]);

    if (isLoading) {
        return <Loading />;
    } else
        return (
            <div>
                <Nav />
                <div ref={productsHeroRef}>
                    <ProductsHero />
                </div>
                <Features />
                <Benefits />
                <div ref={bannerRef}>
                    <LastCTA />
                </div>
                <Footer />
            </div>
        );
};
