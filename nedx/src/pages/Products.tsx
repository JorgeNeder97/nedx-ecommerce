import { Nav } from "#components/Nav.tsx";
import { useEffect, useState } from 'react';
import { ProductsCard } from "#models/Products.ts";
import { ProductCard } from "#components/ProductCard.tsx";


const productsForCards: ProductsCard[] = [
    {
        id: 0,
        name: 'Remera ST Naranja',
        price: 12300,
        description: 'Si te gusta llamar la atención esta remera 100% de algodón puro y un color naranja vintage es para vos',
        image: 'RemStyNaranja.png',
        talles: ['S', 'M', 'L', 'XL']
    },
    {
        id: 1,
        name: 'Remera ST Blanca',
        price: 12500,
        description: 'Marcá la diferencia con esta remera 100% de algodón y 100% de elegancia al estilo Nedx Style',
        image: 'RemStyBlanca.png',
        talles: ['S', 'M', 'L', 'XL']
    },
    {
        id: 2,
        name: 'Remera ST Crema',
        price: 12000,
        description: 'Complementá tu estilo único con esta remera 100% de algodón puro y un color crema soft',
        image: 'RemStyCrema.png',
        talles: ['S', 'M', 'L', 'XL']
    },
    {
        id: 3,
        name: 'Buzo Origins Negro',
        price: 28400,
        description: 'Representa el estilo y la historia de nuestra marca con este buzo 100% de algodón de la mejor calidad',
        image: 'BuzNegro.png',
        talles: ['S', 'M', 'L', 'XL']
    },
    {
        id: 4,
        name: 'Buzo Origins Blanco',
        price: 28600,
        description: 'Representa el estilo y la historia de nuestra marca con este buzo 100% de algodón de la mejor calidad',
        image: 'BuzBlanco.png',
        talles: ['S', 'M', 'L', 'XL']
    },
    {
        id: 5,
        name: 'Buzo Kang Rosa',
        price: 21250,
        description: 'Toda la comodidad y el abrigo que buscás está acá, nuestro Buzo Style Kang Rosa es la elección perfecta para quienes buscan un estilo único',
        image: 'KangRosa.png',
        talles: ['S', 'M', 'L', 'XL']
    },
    {
        id: 6,
        name: 'Buzo Kang Verde',
        price: 22000,
        description: 'Toda la comodidad y el abrigo que buscás está acá, nuestro Buzo Style Kang Verde es la elección perfecta para demostrar que tu estilo es único',
        image: 'KangVerde.png',
        talles: ['S', 'M', 'L', 'XL']
    },
];


export const Products = () => {

    const [products, setProducts] = useState<ProductsCard[]>([]);

    useEffect(() => {
        const storedProducts = sessionStorage.getItem('products');
        if(storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            sessionStorage.setItem('products', JSON.stringify(productsForCards));
            setProducts(productsForCards);
        }
    }, []);

    return (
        <div>
            <Nav />

            <div className="px-10 py-14 sm:py-20 lg:px-0 lg:py-20 flex md:grid flex-col md:grid-cols-2 lg:grid-cols-3 place-items-center gap-14   md:w-[750px] md:m-auto md:gap-10 md:gap-y-20 lg:w-[1000px]  lg:gap-0 lg:gap-y-20">
                {
                    products.map((item, i) => (
                        <ProductCard key={i} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} talles={item.talles} />
                    ))
                }
            </div>
        </div>
    );
};
