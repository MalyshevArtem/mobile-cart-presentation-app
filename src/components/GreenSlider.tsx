import { ChevronRightIcon } from "@heroicons/react/20/solid";
import SliderProduct from "./SliderProduct";
import DragScroll from "./DragScroll";
import { useState } from "react";
import type { Product } from "../types/Types";

export default function GreenSlider({products} : {products: Product[]}) {
    const [filter, setFilter] = useState("fruits");

    const filtered = products.filter(p => p.category === filter);

    const productsList = filtered.map(p => <SliderProduct product={p}/>);

    return (
        <section className="relative">
            <div className="w-[calc(100%+32px)] h-full bg-gray-100 absolute -z-1 -right-4 rounded-[16px]"></div>
            <div className="pt-6 pb-4 px-2">
                <div className="mb-2 flex items-center">
                    <h2 className="text-[24px] font-bold mr-2">Фрукты, овощи</h2>
                    <ChevronRightIcon className="h-6 w-6"/>
                </div>
                <div className="max-w-66.25 text-[14px] leading-5 font-medium text-gray-500">Полностью натуральные и свежие продукты с коротким сроком годности</div>
                <div className="mt-4">
                    <div className="flex gap-2">
                        <div className={`py-2 px-3 rounded-[5px] text-[12px] font-medium cursor-pointer leading-4 ${filter === "fruits" ? "bg-lime-600 text-white" : "bg-gray-200 text-gray-500"}`} onClick={() => setFilter("fruits")}>Фрукты</div>
                        <div className={`py-2 px-3 rounded-[5px] text-[12px] font-medium cursor-pointer leading-4 ${filter === "vegetables" ? "bg-lime-600 text-white" : "bg-gray-200 text-gray-500"}`} onClick={() => setFilter("vegetables")}>Овощи</div>
                        <div className={`py-2 px-3 rounded-[5px] text-[12px] font-medium cursor-pointer leading-4 ${filter === "berries" ? "bg-lime-600 text-white" : "bg-gray-200 text-gray-500"}`} onClick={() => setFilter("berries")}>Ягоды</div>
                    </div>
                </div>
            </div>
            <div className="pb-4">
                <DragScroll>
                    {productsList}
                </DragScroll>
            </div>
            <div className=""></div>
        </section>
    );
}
