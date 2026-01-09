import type { Product } from "../types/Types";
import { useCartStore } from "../stores/cartStore";
import CartControl from "./CartControl";

export default function SliderProduct({ product }: { product: Product }) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div className="w-[144px] shrink-0">
            <div className="w-full min-w-[140px] min-h-[222px] p-2 shadow-md bg-white rounded-lg">
                <div className="h-25">
                    <img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <div className="">
                    <div className="mt-2 h-8 line-clamp-2 leading-4 text-[13px] font-medium">{product.name}</div>
                    <div className="mt-1.25 flex flex-col">
                        <div className="mb-1.25 font-semibold">{product.price}&nbsp;₽</div>
                        <CartControl id={product.id}>
                            <button
                                type="button"
                                className="w-full h-[38px] text-[13px] cursor-pointer bg-lime-600 rounded-sm text-white font-semibold"
                                onClick={() => addToCart(product.id)}>
                                В корзину
                            </button>
                        </CartControl>
                    </div>
                </div>
            </div>
        </div>
    );
}
