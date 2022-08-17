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
    const response = await fetch("http//localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data);

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
                  <tr>
                    <td width="50%">Desenvolvimento de Site</td>
                    <td>
                      <PriceHighLight variant="income">
                        R$ 500,00
                      </PriceHighLight>
                    </td>
                    <td>Venda</td>
                    <td>13/04/2022</td>
                  </tr>
                );
              })}
            </tbody>
          </TransactionTable>
        </TransactionContainer>
      </>
    );
  }
}
