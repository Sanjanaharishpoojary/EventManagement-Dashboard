
import React, { useState, useEffect } from "react";
import axios from "../services/eventService";

function EventManagement() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.getEvents().then((res) => setEvents(res.data));
    }, []);

    return (
        <div>
            <h1>Event Management</h1>
            {events.map((event) => (
                <div key={event._id}>
                    <h3>{event.name}</h3>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    );
}

export default EventManagement;
