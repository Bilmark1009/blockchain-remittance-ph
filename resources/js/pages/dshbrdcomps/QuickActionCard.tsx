import { ReactNode } from 'react';

interface Action {
    title: string;
    icon: ReactNode;
    onClick: () => void;
    color: string;
}

interface QuickActionCardProps {
    actions: Action[];
}

export default function QuickActionCard({ actions }: QuickActionCardProps) {
    return (
        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-3 gap-3">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        onClick={action.onClick}
                        className={`${action.color} text-white rounded-lg p-3 flex flex-col items-center justify-center transition-colors`}
                    >
                        {action.icon}
                        <span className="mt-1 text-xs font-medium">{action.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}