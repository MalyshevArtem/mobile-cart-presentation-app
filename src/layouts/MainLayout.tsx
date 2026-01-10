import BottomMenu from "../components/BottomMenu";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import type { Product } from "../types/Types";

export default function MainLayout({ products }: { products: Product[] }) {
    return (
        <div className="max-w-[500px] m-auto">
            <Header products={products} />
            <main className="pb-10">
                <div className="mt-4">
                    <div className="max-w-full px-4">
                        <Outlet />
                    </div>
                </div>
            </main>
            <BottomMenu />
        </div>
    );
}