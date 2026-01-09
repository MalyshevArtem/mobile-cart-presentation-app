import { TrashIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "../stores/cartStore";
import type { ReactNode } from "react";

export default function CartControl({ children, id }: { children?: ReactNode; id: number }) {
    const cart = useCartStore((state) => state.cart);
    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const isInCart = cart.some(item => item.id === id);
    const item = cart.find(item => item.id === id);

    return (
        <div>
            {!isInCart
                ?
                children
                :
                <div className="p-[3px] flex justify-between items-stretch rounded-[22px] bg-gray-100">
                    <button
                        type="button"
                        className="w-8 h-8 flex justify-center items-center rounded-[50%] bg-lime-600 cursor-pointer"
                        onClick={() => removeFromCart(id)}>
                        {(item && item.count > 1) && <MinusIcon className="w-5 h-5 text-white" />}
                        {(item && item.count === 1) && <TrashIcon className="w-5 h-5 text-white" />}
                    </button>
                    <div className="w-10 h-[30px] flex justify-center items-center">{item && item.count}</div>
                    <button
                        type="button"
                        className="w-8 h-8 flex justify-center items-center rounded-[50%] bg-lime-600 cursor-pointer"
                        onClick={() => addToCart(id)}>
                        <PlusIcon className="w-5 h-5 text-white" />
                    </button>
                </div>
            }
        </div>
    );
}