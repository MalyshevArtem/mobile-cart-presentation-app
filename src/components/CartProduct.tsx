import type { Product } from "../types/Types";
import CartControl from "./CartControl";

export default function CartProduct({ product }: { product: Product }) {
    return (
        <div className="mb-5 border-b border-gray-200 pb-6 flex">
            <div className="w-[80px] h-[70px] shrink-0">
                <img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} className="w-full h-full object-contain"/>
            </div>
            <div className="w-full flex flex-col ml-5">
                <div className="w-[85%] h-10 mb-[14px] text-[14px] line-clamp-2">{product.name}</div>
                <div className="flex justify-between items-center">
                    <div className="font-semibold">{product.price}&nbsp;₽</div>
                    <CartControl id={product.id} />
                </div>
            </div>
        </div>
    );
}
