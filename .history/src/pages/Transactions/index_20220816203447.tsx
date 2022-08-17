import { useEffect } from "react";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from "./styles";

export function Transactions() {
  async function loadTransactions() {
    const response = await fetch("http//localhost:3000/transactions");
    const data = await response.json();

    useEffect(() => {
      loadTransactions();
    }, []);

    return (
      <>
        <TransactionContainer>
          <SearchForm />
          <TransactionTable>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento de Site</td>
                <td>
                  <PriceHighLight variant="income">R$ 500,00</PriceHighLight>
                </td>
                <td>Venda</td>
                <td>13/04/2022</td>
              </tr>
              <tr>
                <td width="50%">Desenvolvimento de Site</td>
                <td>
                  <PriceHighLight variant="income">R$ 500,00</PriceHighLight>
                </td>
                <td>Venda</td>
                <td>13/04/2022</td>
              </tr>
              <tr>
                <td width="50%">Desenvolvimento de Site</td>
                <td>
                  <PriceHighLight variant="income">R$ 500,00</PriceHighLight>
                </td>
                <td>Venda</td>
                <td>13/04/2022</td>
              </tr>
              <tr>
                <td width="50%">Nubank</td>
                <td>
                  <PriceHighLight variant="outcome">- R$ 500,00</PriceHighLight>
                </td>
                <td>Cartão de Crédito</td>
                <td>13/04/2022</td>
              </tr>
            </tbody>
          </TransactionTable>
        </TransactionContainer>
      </>
    );
  }
}
