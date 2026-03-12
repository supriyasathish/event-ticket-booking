import { useState } from "react";

function SeatPage({selectSeat,bookedSeats}){

const seats=[
"A1","A2","A3","A4","A5",
"B1","B2","B3","B4","B5",
"C1","C2","C3","C4","C5"
]

const [selected,setSelected] = useState(null)

return(

<div className="seat-page">

<h2>Select Seat</h2>

<div className="screen">SCREEN</div>

<div className="seat-grid">

{seats.map(s=>{

const isBooked = bookedSeats.includes(s)

return(

<div
key={s}
className={`seat ${selected===s?"selected":""} ${isBooked?"booked":""}`}

onClick={()=>{

if(isBooked) return

setSelected(s)
selectSeat(s)

}}
>

{s}

</div>

)

})}

</div>

</div>

)

}

export default SeatPage