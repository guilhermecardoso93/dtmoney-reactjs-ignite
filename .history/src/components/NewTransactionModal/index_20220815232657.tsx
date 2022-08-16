import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Close />
        <Dialog.Title>Nova Transação</Dialog.Title>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="nu,ber" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
