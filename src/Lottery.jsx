
import "./Lottery.css";
import {genTicket ,sum} from "./helper";
import { useState } from "react";
import Ticket from "./Ticket";
function Lottery({n = 3,winCondition}){
    let [ticket,setTicket] = useState(genTicket(n));
    //winning condition
    let isWinning = winCondition(ticket);

    let buyTicket =()=>{
        setTicket(genTicket(n));

    }
    return(
        <div >
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations You Won!!!"}</h3>
        </div>
        
    )
}
export default Lottery;