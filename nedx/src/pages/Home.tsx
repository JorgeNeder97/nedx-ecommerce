import { Banner } from '#components/Banner.tsx';
import { Footer } from '#components/Footer.tsx';
import { Info } from '#components/Info.tsx';
import { Nav } from '#components/Nav.tsx';
import { ProductsHero } from '#components/ProductsHero.tsx';

export const Home = () => {
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
