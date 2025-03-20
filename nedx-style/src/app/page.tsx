import ProductsHeroClient from "@/components/ProductsHero";

const Home = () => {
    return (
        <div className="bg-[url('/background.jpg')] bg-cover">
            <div className="bg-[url('/Banner1.png')] bg-cover w-full h-[500px] sm:h-[530px] md:h-[600px] lg:h-[600px] relative">
                <ProductsHeroClient />
            </div>
        </div>
    );
};

export default Home;