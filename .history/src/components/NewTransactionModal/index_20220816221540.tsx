import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Overlay,
  Content,
  Close,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { register, handleSubmit } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <Close>
          <X />
        </Close>

        <form action="">
          <input 
            type="text" 
            placeholder="Descrição" 
            required
            {...register('description')} 
            />
          <input 
            type="number" 
            placeholder="Preço" 
            required
            {...register('price', { valueAsNumber: true})} 
            />
          <input 
            type="text" 
            placeholder="Categoria" 
            required
            {...register('category')} 
            />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              Entrada
              <ArrowCircleUp size={20} />
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              Saída
              <ArrowCircleDown size={20} />
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
