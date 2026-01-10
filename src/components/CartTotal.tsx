export default function CartTotal({total} : {total: number}) {
    return (
        <div className="w-full max-w-[500px] -mx-4 py-3 px-4 fixed bottom-[61px] bg-white shadow-[0_-4px_18px_rgba(0,0,0,0.05)]">
            <div className="w-full flex items-center justify-between">
                <div className="text-[24px] font-bold">{total}&nbsp;₽</div>
                <button type="button" className="h-[44px] py-[10px] px-5 text-white font-semibold rounded-[8px] bg-lime-600 cursor-pointer">Оформить заказ</button>
            </div>
        </div>
    );
}