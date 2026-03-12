import { useState } from "react";

const events=[

{
id:1,
name:"Music Concert",
price:500,
image:"https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=600"
},

{
id:2,
name:"Tech Conference",
price:700,
image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
},

{
id:3,
name:"Comedy Show",
price:400,
image:"https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=600"
}

]

function EventPage({selectEvent}){

const [selected,setSelected] = useState(null)

return(

<div className="event-page">

<h2>Select Event</h2>

<div className="event-grid">

{events.map(e=>(

<div
key={e.id}
className={`event-card ${selected===e.id?"selected":""}`}
onClick={()=>setSelected(e.id)}
>

<img src={e.image} className="event-img"/>

<h3>{e.name}</h3>

<p>Price ₹{e.price}</p>

<button onClick={()=>selectEvent(e)}>
Continue
</button>

</div>

))}

</div>

</div>

)

}

export default EventPage