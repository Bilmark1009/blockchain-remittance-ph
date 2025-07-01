interface Transaction {
    id: string;
    amount: string;
    currency: string;
    recipient: string;
    relationship: string;
    status: string;
    date: string;
    method: string;
}

interface TransactionHistoryProps {
    transactions: Transaction[];
}

export default function TransactionHistory({ transactions }: TransactionHistoryProps) {
    return (
        <div className="flow-root">
            <ul className="-mb-8">
                {transactions.map((transaction, transactionIdx) => (
                    <li key={transaction.id}>
                        <div className="relative pb-8">
                            {transactionIdx !== transactions.length - 1 ? (
                                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                                    <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-800 ${
                                        transaction.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                                    }`}>
                                        {transaction.status === 'completed' ? (
                                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="text-sm text-gray-800 dark:text-gray-200">
                                            Sent to <span className="font-medium text-gray-900 dark:text-white">{transaction.recipient}</span> ({transaction.relationship})
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Via {transaction.method}
                                        </p>
                                    </div>
                                    <div className="whitespace-nowrap text-right text-sm">
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {transaction.amount} {transaction.currency}
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            {new Date(transaction.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}