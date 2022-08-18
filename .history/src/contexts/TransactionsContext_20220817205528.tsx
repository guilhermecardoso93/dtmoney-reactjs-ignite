import { Children, createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: () => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    console.log(data);

    setTransactions(data);
  }
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
