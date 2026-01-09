import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { useCartStore } from "../stores/cartStore";
import { NavLink } from "react-router-dom";

export default function BottomMenu() {
    const cart = useCartStore((state) => state.cart);
    return (
        <div className="w-full fixed bottom-0 inset-x-0 shadow-[0_-4px_18px_rgba(0,0,0,0.05)] bg-white">
            <div className="h-[62px] flex justify-around">
                <NavLink
                to="/" 
                className={({isActive}) => `flex flex-col items-center pt-3 cursor-pointer ${isActive ? "text-lime-600" : "text-gray-400"}`}>
                    <BuildingStorefrontIcon className="w-6 h-6 " />
                    <div className="text-[12px] font-medium leading-4">Главная</div>
                </NavLink>
                <NavLink
                to="/cart"
                className={({isActive}) => `flex flex-col items-center pt-3 cursor-pointer ${isActive ? "text-lime-600" : "text-gray-400"}`}>
                    <div className="relative">
                        <ShoppingCartIcon className="w-6 h-6" />
                        {cart.length > 0 &&
                            <div className="
                            h-4 min-w-4 px-[3px]
                            flex justify-center items-center
                            absolute top-[-5px] right-[-5px]
                            text-[12px] font-semibold text-black
                            bg-amber-400 rounded-[50%]"
                            >
                            {cart.length}
                            </div>
                        }
                    </div>
                    <div className="text-[12px] font-medium leading-4">Корзина</div>
                </NavLink>
            </div>
        </div>
    );
}