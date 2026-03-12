import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EventPage from "./components/EventPage";
import SeatPage from "./components/SeatPage";
import ConfirmPage from "./components/ConfirmPage";
import Receipt from "./components/Receipt";

function App(){

const [page,setPage] = useState("home")
const [event,setEvent] = useState(null)
const [seat,setSeat] = useState(null)
const [tickets,setTickets] = useState([])
const [bookedSeats,setBookedSeats] = useState([])

const confirmBooking = () => {

const booking = {
id:Math.floor(Math.random()*10000),
event:event.name,
seat:seat,
price:event.price,
date:new Date().toLocaleString()
}

setTickets([...tickets,booking])
setBookedSeats([...bookedSeats,seat])

setPage("receipt")

}

const goHome = () => {

setPage("home")
setEvent(null)
setSeat(null)

}

return(

<div>

<Navbar/>

{page==="home" &&
<Home start={()=>setPage("events")} tickets={tickets}/>
}

{page==="events" &&
<EventPage selectEvent={(e)=>{
setEvent(e)
setPage("seats")
}}/>
}

{page==="seats" &&
<SeatPage
bookedSeats={bookedSeats}
selectSeat={(s)=>{
setSeat(s)
setPage("confirm")
}}
/>
}

{page==="confirm" &&
<ConfirmPage event={event} seat={seat} confirm={confirmBooking}/>
}

{page==="receipt" &&
<Receipt event={event} seat={seat} goHome={goHome}/>
}

</div>

)

}

export default App