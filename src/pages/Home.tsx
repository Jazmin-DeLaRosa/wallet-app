import CardBalanceBlock from "../components/CardBalanceBlock";
import DailyPointsBlock from "../components/DailyPointsBlock";
import NoPaymentBlock from "../components/NoPaymentBlock";
import TransactionsList from "../components/TransactionsList";

export default function Home() {
    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 min-h-screen space-y-4">
            <div className="grid grid-cols-2 gap-4">
                {/* Columna izquierda */}
                <div className="flex flex-col gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-md h-[100px]">
                        <CardBalanceBlock balance={420.55} maxLimit={1500} />
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-md h-[100px]">
                        <DailyPointsBlock />
                    </div>
                </div>

                {/* Columna derecha */}
                <div className="bg-white p-4 rounded-2xl shadow-md row-span-2 h-[216px] flex items-center justify-center">
                    <NoPaymentBlock />
                </div>
            </div>
            <TransactionsList />
        </div>
    );
}