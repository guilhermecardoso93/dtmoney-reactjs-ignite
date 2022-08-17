import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod';

const searchSchema = z.object({
  query: z.string(),
})

export function SearchForm() {
  const { register, handleSubmit} = useForm()

  function handleSearchTransactions() {

  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transação" 
        {...register('query')}
      />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
