import { ReactNode } from 'react';

interface BalanceCardProps {
    title: string;
    amount: string;
    currency: string;
    trend: string;
    icon: ReactNode;
}

export default function BalanceCard({ title, amount, currency, trend, icon }: BalanceCardProps) {
    return (
        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                    <div className="mt-1 flex items-baseline">
                        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{amount}</p>
                        <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">{currency}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{trend}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center">
                    {icon}
                </div>
            </div>
        </div>
    );
}