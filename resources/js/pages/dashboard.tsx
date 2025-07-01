import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { CurrencyDollarIcon, ArrowPathIcon, ChartBarIcon, UserGroupIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import TransactionHistory from './dshbrdcomps/TransactionHistory';
import BalanceCard from './dshbrdcomps/BalanceCard';
import QuickActionCard from './dshbrdcomps/QuickActionCard';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

// Mock data - replace with real API calls
const recentTransactions = [
    {
        id: 'txn_123',
        amount: '10,000',
        currency: 'PHP',
        recipient: 'Maria Santos',
        relationship: 'Mother',
        status: 'completed',
        date: '2023-11-15T08:30:00Z',
        method: 'GCash'
    },
    {
        id: 'txn_124',
        amount: '5,500',
        currency: 'PHP',
        recipient: 'Juan Dela Cruz',
        relationship: 'Brother',
        status: 'pending',
        date: '2023-11-10T14:45:00Z',
        method: 'Bank Transfer'
    }
];

const stats = [
    { name: 'Total Sent', value: '₱86,200', change: '+12%', changeType: 'positive' },
    { name: 'Fees Saved', value: '₱4,310', change: '+85%', changeType: 'positive' },
    { name: 'Transfer Speed', value: '28s', change: 'Avg', changeType: 'neutral' },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            
            {/* Main Dashboard Content */}
            <div className="flex-1 space-y-6 p-6">
                {/* Welcome Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Welcome back, <span className="text-amber-500">Maria!</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Here's your remittance activity overview
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat, statIdx) => (
                        <div 
                            key={stat.name}
                            className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {stat.name}
                                    </p>
                                    <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                                        {stat.value}
                                    </p>
                                </div>
                                <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium 
                                    ${stat.changeType === 'positive' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'}`}
                                >
                                    {stat.change}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left Column */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Balance & Quick Actions */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <BalanceCard 
                                title="Available Balance" 
                                amount="5,600" 
                                currency="PHP" 
                                trend="+2% from last month"
                                icon={<CurrencyDollarIcon className="h-6 w-6 text-amber-500" />}
                            />
                            
                            <QuickActionCard 
                                actions={[
                                    {
                                        title: "Send Money",
                                        icon: <ArrowPathIcon className="h-5 w-5" />,
                                        onClick: () => console.log("Send money clicked"),
                                        color: "bg-blue-600 hover:bg-blue-700"
                                    },
                                    {
                                        title: "Add Funds",
                                        icon: <ChartBarIcon className="h-5 w-5" />,
                                        onClick: () => console.log("Add funds clicked"),
                                        color: "bg-green-600 hover:bg-green-700"
                                    },
                                    {
                                        title: "Cash Out",
                                        icon: <CurrencyDollarIcon className="h-5 w-5" />,
                                        onClick: () => console.log("Cash out clicked"),
                                        color: "bg-purple-600 hover:bg-purple-700"
                                    }
                                ]}
                            />
                        </div>

                        {/* Recent Transactions */}
                        <div className="rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                        Recent Transactions
                                    </h2>
                                    <button className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                                        View All
                                    </button>
                                </div>
                                <TransactionHistory transactions={recentTransactions} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Family Accounts */}
                        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                    Family Accounts
                                </h2>
                                <button className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                                    <UserGroupIcon className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                                        <span className="text-blue-600 dark:text-blue-300 font-medium">MS</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Maria Santos</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Mother - Manila</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                                        <span className="text-green-600 dark:text-green-300 font-medium">JD</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Juan Dela Cruz</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Brother - Cebu</p>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-4 w-full py-2 px-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                                + Add Family Member
                            </button>
                        </div>

                        {/* Scheduled Transfers */}
                        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                    Scheduled Transfers
                                </h2>
                                <button className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                                    <ClockIcon className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Monthly Allowance</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Every 15th of the month</p>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">₱10,000</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">School Fees</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Every 5th of the month</p>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">₱5,500</span>
                                </div>
                            </div>
                            <button className="mt-4 w-full py-2 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                                + Schedule New Transfer
                            </button>
                        </div>

                        {/* Security Status */}
                        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                    Security Status
                                </h2>
                                <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">2FA Enabled</span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                        Active
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Last Login</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">15 Nov 2023, 08:30</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Device</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">iPhone 13 (Dubai)</span>
                                </div>
                            </div>
                            <button className="mt-4 w-full py-2 px-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                                Security Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}