import GreenSlider from "../components/GreenSlider";
import type { Product } from "../types/Types";
import CategorySlider from "../components/CategorySlider";

export default function Home({ products }: { products: Product[] }) {
    return (
        <>
            <GreenSlider products={products} />
            <CategorySlider />
        </>
    )
}
