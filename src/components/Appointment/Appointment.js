import React, { useState } from 'react';
import './Appointment.css';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import Booking from './Booking/Booking';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleCalender = (date) => {
        setSelectedDate(date);
    }
    return (
        <div className="appointment-container">
            <Navbar />
            <AppointmentHeader handleCalender={handleCalender}/>
            <Booking date={selectedDate}/>
            <Footer />
        </div>
    );
};

export default Appointment;