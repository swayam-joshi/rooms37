import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookingPage = () => {
    const { propertyId } = useParams();
    const [guestId, setGuestId] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleBooking = async () => {
        try {
            await axios.post("http://url:5000/book-property", {
                guest_id: guestId,
                property_id: propertyId,
                start_date: startDate,
                end_date: endDate,
            });
            alert("Booking Successful!");
        } catch (error) {
            console.error("Booking failed:", error);
        }
    };

    return (
        <div>
            <h1>Book Property</h1>
            <input type="text" placeholder="Guest ID" onChange={(e) => setGuestId(e.target.value)} />
            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
            <input type="date" onChange={(e) => setEndDate(e.target.value)} />
            <button onClick={handleBooking}>Confirm Booking</button>
        </div>
    );
};

export default BookingPage;
