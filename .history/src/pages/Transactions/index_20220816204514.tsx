import { useEffect, useState } from "react";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    console.log(data)

    setTransactions(data);
  }
    useEffect(() => {
      loadTransactions();
    }, []);

    return (
      <>
        <TransactionContainer>
          <SearchForm />
          <TransactionTable>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighLight variant={transaction.type}>
                        {transaction.price}
                      </PriceHighLight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </TransactionTable>
        </TransactionContainer>
      </>
    );
  }
s
