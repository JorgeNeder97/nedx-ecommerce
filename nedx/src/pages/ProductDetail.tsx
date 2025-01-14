import { Nav } from "#components/Nav.tsx";
import { ProductsCard } from "#models/Products.ts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
    const [products, setProducts] = useState<ProductsCard[]>([]);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const products = sessionStorage.getItem("products");
        if (products) setProducts(JSON.parse(products));
    }, []);

    const product = products.find((item) => id && item.id == parseInt(id));
    console.log(products);
    console.log(product);
    if (product)
        return (
            <div>
                <Nav />
                <div className="w-screen flex flex-col gap-12 px-10 pb-10 bg-white">
                    <div className="flex flex-col p-5 gap-10">
                        <h3 className="text-primary text-[28px]">
                            {product.name}
                        </h3>
                        <img
                            src={`/products/${product.image}`}
                            alt={product.name}
                            className="max-w-[500px] rounded"
                        />
                    </div>
                    <div className="px-5">
                        <p className="text-primary">Color: Naranja</p>
                        <div>
                            <p className="text-primary">
                                Talles: <strong>Elegí</strong>
                            </p>
                            <div className="flex gap-5">
                                {product.talles.map((talle) => (
                                <p className="w-[30px] ring-1 ring-primary text-primary rounded text-center hover:cursor-pointer">{talle}</p>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};
