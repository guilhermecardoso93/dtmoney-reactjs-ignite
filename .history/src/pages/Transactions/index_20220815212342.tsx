import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContainer } from "./styles";

export function Transactions() {
  return (
    <>
      <TransactionContainer>
        <table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>R$ 500,00</td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>R$ 500,00</td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>R$ 500,00</td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Nubank</td>
              <td> - R$ 400,00</td>
              <td>Cartão de Crédito</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </table>
      </TransactionContainer>
    </>
  );
}
