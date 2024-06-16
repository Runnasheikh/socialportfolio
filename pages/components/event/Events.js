import React, { useEffect, useState } from "react";

import SectionHeaser from "../SectionHeaser";
import Eventbox from "./Eventbox";


const getEvents = async () => {
    const res = await fetch("http://localhost:3000/api/event");
    return res.json();
}

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const data = await getEvents();
            setEvents(data);
        };
        
        fetchEvents();
    }, []);

    console.log(events);

    return (

        <section className="section" id="tours">

        <div className="container mx-auto">
           
            <SectionHeaser pretitle="world tour" title="upcoming ebrny"/>
           <Eventbox events={events}/>
        </div>
        </section>
    );
}

export default Events;
