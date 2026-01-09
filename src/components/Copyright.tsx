export default function Copyright() {
    const year = new Date().getFullYear();
    return (
        <div className="px-4">
            <div className="text-[14px] text-gray-600 tracking-[0.5px] text-center">
                © {year}. Официальный сайт сети «Зелёная Лавка»
            </div>
        </div>
    );
}