import CartProduct from "../components/CartProduct";
import CartTotal from "../components/CartTotal";
import { useCartStore } from "../stores/cartStore";
import type { Product } from "../types/Types";

export default function ShoppingCart({ products }: { products: Product[] }) {
    const cart = useCartStore((state) => state.cart);
    const removeAll = useCartStore((state) => state.removeAll);

    const productsList = products.filter(p => cart.some(c => c.id === p.id)).map(p => <CartProduct product={p}/>);
    
    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product?.price ?? 0) * item.count;
    }, 0);

    return (
        <>
            <div>
                <div className="flex justify-between items-baseline">
                    <div className="relative">
                        <h1 className="mr-5 font-bold text-[26px]">Корзина</h1>
                        {total > 0 && <span className="absolute top-0 right-0 text-gray-500">{cart.length}</span>}
                    </div>
                    <button className="text-[14px] font-medium text-gray-300" onClick={removeAll}>Очистить</button>
                </div>
            </div>
            <div className="mb-[120px]">
                <div className="mt-8">
                    {productsList}
                </div>
            </div>
            {total > 0 && <CartTotal total={total}/>}
        </>
    )
}
