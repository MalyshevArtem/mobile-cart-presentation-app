import type { Category } from "../types/Types";

export default function CategoryItem({category} : {category: Category}) {
    return (
        <div
        style={{backgroundImage: `url(${import.meta.env.BASE_URL}${category.image})`}}
        className="
        w-[195px] h-[120px] p-3
        shrink-0
        text-[14px] font-semibold
        bg-contain bg-white bg-no-repeat
        shadow-lg rounded-[12px]">
            {category.name}
        </div>
    );
}