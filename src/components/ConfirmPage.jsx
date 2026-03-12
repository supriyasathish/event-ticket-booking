function ConfirmPage({event,seat,confirm}){

return(

<div className="confirm">

<h2>Confirm Booking</h2>

<div className="confirm-card">

<p>Event : {event.name}</p>
<p>Seat : {seat}</p>
<p>Price : ₹{event.price}</p>

</div>

<button className="confirm-btn" onClick={confirm}>
Confirm Booking
</button>

</div>

)

}

export default ConfirmPage