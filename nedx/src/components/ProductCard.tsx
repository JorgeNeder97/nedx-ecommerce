import { ProductsCard } from "#models/Products.ts";
import { Link } from 'react-router-dom';

export const ProductCard = (props: ProductsCard) => {
    return (
        <Link to={`/products/${props.id}`}>
            <div className="min-w-[250px] max-w-[300px] p-2 flex flex-col bg-black/80 rounded">
                <div>
                    <img src={`/products/${props.image}`} alt="Product Image" className="max-w-[280px] max-h-[280px] min-w-[250px] m-auto rounded" />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-secondary text-[24px] font-extrabold pl-1">$ { props.price }</p>
                    <h4 className="pl-1 font-light text-secondary">{ props.name }</h4>
                </div>
                <span className="hidden hover:absolute hover:w-full hover:h-full hover:bg-black/20 hover:cursor-pointer">Ver Producto</span>
            </div>
        </Link>
    );
};
