import { Banner } from "#components/Banner.tsx";
import { Footer } from "#components/Footer.tsx";
import { Info } from "#components/Info.tsx";
import { Loading } from "#components/Loading.tsx";
import { Nav } from "#components/Nav.tsx";
import { ProductsHero } from "#components/ProductsHero.tsx";
import usePageLoad from "#hooks/usePageLoad.ts";


export const Home = () => {
    const isLoading = usePageLoad();

    if (isLoading) {
        return <Loading />;
    } else
        return (
            <div>
                <Nav />
                <Banner />
                <Info />
                <ProductsHero />
                <Footer />
            </div>
        );
};
