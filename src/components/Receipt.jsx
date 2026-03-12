function Receipt({event,seat,goHome}){

const id = Math.floor(Math.random()*10000)
const date = new Date().toLocaleString()

return(

<div className="receipt">

<h2>🎉 Booking Successful</h2>

<div className="ticket">

<p>Booking ID : {id}</p>
<p>Event : {event.name}</p>
<p>Seat : {seat}</p>
<p>Price : ₹{event.price}</p>
<p>Date : {date}</p>

</div>

<button className="home-btn" onClick={goHome}>
Return Home
</button>

</div>

)

}

export default Receipt