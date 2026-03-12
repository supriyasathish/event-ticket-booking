import { useState } from "react";

function Home({start,tickets}){

const [view,setView] = useState("events")

return(

<div className="home">

<div className="dashboard">

<button
className={view==="events"?"active":""}
onClick={()=>setView("events")}
>
Events
</button>

<button
className={view==="tickets"?"active":""}
onClick={()=>setView("tickets")}
>
Tickets Booked
</button>

</div>


{view==="events" && (

<div className="events-section">

<h1 className="title">Book Your Favorite Events</h1>

<button className="book-btn" onClick={start}>
Book Tickets
</button>

<div className="event-preview-container">

<div className="event-preview">🎵 Music Concert</div>
<div className="event-preview">💻 Tech Conference</div>
<div className="event-preview">😂 Comedy Show</div>

</div>

</div>

)}

{view==="tickets" && (

<div className="history">

<h2>Your Ticket History</h2>

{tickets.length===0 && <p>No tickets booked yet</p>}

{tickets.map(t=>(
<div key={t.id} className="ticket-history">

<p>{t.event}</p>
<p>Seat : {t.seat}</p>

</div>
))}

</div>

)}

</div>

)

}

export default Home