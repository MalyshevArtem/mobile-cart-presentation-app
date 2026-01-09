import noimage from "../assets/noimage.svg";
import type { Product } from "../types/Types";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCartStore } from "../stores/cartStore";
import CartControl from "./CartControl";

export default function SearchProduct({ product }: { product: Product }) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div key={product.id} className="flex items-center min-h-22.75 mb-3">
            <div className="w-20.75 h-17.5 mr-3.5 pb-1">
                {
                    product.image ?
                        <img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} className="object-contain w-full h-full" /> :
                        <img src={noimage} alt={product.name} className="object-contain w-full h-full" />
                }
            </div>
            <div className="flex flex-col flex-1">
                <div className="text-sm max-w-47.5 w-full truncate">{product.name}</div>
                <div className="min-w-33 flex items-center justify-between">
                    <div className="h-10.5 mr-3.5 flex flex-col justify-center">
                        <div className="text-[20px] font-semibold">{product.price}&nbsp;₽</div>
                    </div>
                    <CartControl id={product.id}>
                        <button
                            type="button"
                            className="h-9 w-9 flex justify-center items-center rounded-[50%] bg-lime-600 cursor-pointer"
                            onClick={() => addToCart(product.id)}
                        >
                            <ShoppingCartIcon className="w-5 h-5 text-white" />
                        </button>
                    </CartControl>
                </div>
            </div>
        </div>
    );
}