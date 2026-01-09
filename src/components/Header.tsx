import empty from "../assets/empty.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import SearchProduct from "./SearchProduct.tsx";
import type { Product } from "../types/Types.ts";


export default function Header({products} : {products: Product[]}) {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState("");

    const filtered = products.filter(p => {
        if (value.trim().length < 3) return false;
        return p.name.toLowerCase().includes(value.toLowerCase());
    });

    const productsList = filtered.map(p => (
        <SearchProduct product={p}/>
    ));

    return (
        <div className="h-14">
            {isFocused && <div className="h-screen w-full z-10 fixed bg-black/50" onClick={() => setIsFocused(false)}></div>}
            <div className="flex w-full px-3 py-2 fixed z-20 bg-white">
                <div className="mr-3 flex justify-center items-center">
                    {!isFocused ?
                        <img className="h-11 w-11 object-cover" src="logo.svg" alt="Logo" /> :
                        <ChevronLeftIcon className="h-6 w-6 text-gray-500" onClick={() => setIsFocused(false)} />
                    }
                </div>
                <form autoComplete="off" className="w-full relative" onSubmit={(e) => e.preventDefault()}>
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Найти в Магазине" type="text" name="search" className="w-full h-10 bg-gray-100 pr-18.5 pl-3 rounded-lg leading-5.25 outline-none" onFocus={() => setIsFocused(true)} />
                    <div className="flex z-1 absolute top-2.5 right-2">
                        {value !== "" &&
                            <button type="button" onClick={() => setValue("")}>
                                <XMarkIcon className="h-5.5 w-5.5 text-gray-400" />
                            </button>
                        }
                        {value !== "" && <div className="h-5 w-px mx-1.5 bg-gray-400"></div>}
                        <button type="submit" className="h-5">
                            <MagnifyingGlassIcon className="h-full" />
                        </button>
                    </div>
                </form>
                {(isFocused && value.trim().length > 2) && (
                    <div className="w-full min-h-30 bg-white fixed z-20 left-0 top-14 flex justify-center items-center">
                        { productsList.length > 0 ? (
                            <div className="flex flex-col w-full">
                                <div className="px-4 pt-4">
                                    {productsList}
                                </div>
                                <div className="py-4 w-full text-center">Показать все {productsList.length} товаров</div>
                            </div>
                        ) : (
                            <div className="p-4 flex flex-col items-center justify-center h-[calc(100vh-56px)]">
                                <img src={empty} alt="search-empty" className="w-25 mb-7.5" />
                                <div className="max-w-62.5 text-center">
                                    <div className="text-[18px] font-medium">По вашему запросу ничего не нашлось</div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {!isFocused && (
                    <div className="ml-3 flex justify-center items-center">
                        <button className="cursor-pointer flex flex-col justify-center items-center w-6 h-6">
                            <span className="w-4.5 h-0.5 bg-gray-500 inline-block mx-auto my-[1.5px]"></span>
                            <span className="w-4.5 h-0.5 bg-gray-500 inline-block mx-auto my-[1.5px]"></span>
                            <span className="w-4.5 h-0.5 bg-gray-500 inline-block mx-auto my-[1.5px]"></span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
