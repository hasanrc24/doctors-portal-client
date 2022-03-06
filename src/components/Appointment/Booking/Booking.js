import React from 'react';
import BookingCard from './BookingCard/BookingCard';

const Booking = ({date}) => {

    const bookingData =[
        {
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            desc: '10 SPACES AVAILABLE'
        },
        {
            title: 'Cosmetic Dentistry',
            time: '10:05 AM - 11:30 AM',
            desc: '10 SPACES AVAILABLE'
        },
        {
            title: 'Teeth Cleaning',
            time: '5:00 PM - 6:30 PM',
            desc: '10 SPACES AVAILABLE'
        },
        {
            title: 'Cavity Protection',
            time: '7:00 AM - 8:30 AM',
            desc: '10 SPACES AVAILABLE'
        },
        {
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            desc: '10 SPACES AVAILABLE'
        },
        {
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            desc: '10 SPACES AVAILABLE'
        }
    ]
    return (
        <div className="container mb-5">
            <h2 className="brand-text text-center pt-5 mt-5 mb-5">Available Appointments on {date.toDateString()}</h2>

            <div className="row">
                {
                    bookingData.map(cardData => <BookingCard cardData={cardData} date={date}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default Booking;