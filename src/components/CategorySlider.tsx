import { ChevronRightIcon } from "@heroicons/react/20/solid";
import CategoryItem from "./CategoryItem";
import { useState, useEffect } from "react";
import type { Category } from "../types/Types";
import DragScroll from "./DragScroll";

export default function CategorySlider() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`${import.meta.env.BASE_URL}/data/categories.json`);
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };
        
        fetchCategories();
    }, []);

    return (
        <div className="my-5">
            <div className="mb-5 flex items-center">
                <h2 className="text-[24px] font-bold mr-2">Категории товаров</h2>
                <ChevronRightIcon className="h-6 w-6"/>
            </div>
            <div className="w-[calc(100%+32px)] px-4 -mx-4 overflow-x-auto">
                <DragScroll css="w-[650px] flex flex-wrap gap-2 pb-4">
                    {categories.map(c => <CategoryItem key={c.id} category={c} />)}
                </DragScroll>
            </div>

        </div>
    );
}
