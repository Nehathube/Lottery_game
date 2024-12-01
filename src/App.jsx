
import './App.css'
import { sum } from './helper';
import Lottery from './Lottery';
import Ticket from "./Ticket";

function App() {
  let winCondition =(ticket)=>{
    return ticket.every((num)=>num===ticket[0]);
  }

  return (
   <>
      <Lottery n={3} winCondition={winCondition}/>

    </>
  )
}

export default App