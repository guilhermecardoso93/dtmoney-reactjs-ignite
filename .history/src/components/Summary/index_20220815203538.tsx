import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer } from "./styles";

export function Summary(){
   return (
    <SummaryContainer>
      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e'/>
        </header>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#f75a68'/>
        </header>
      </div>
      <div>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#fff'/>
        </header>
      </div>
    </SummaryContainer>
   )
}