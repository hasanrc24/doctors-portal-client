import React, { useState } from 'react';
import '../../Appointment.css';
import BookingForm from '../../BookingForm/BookingForm';

const BookingCard = ({cardData, date}) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4">
            <div class="booking-card-style mb-4">
                <div class="card-body text-center">
                    <h5 class="card-title brand-text mt-3">{cardData.title}</h5>
                    <p class="card-text">{cardData.time}</p>
                    <small class="card-desc">{cardData.desc}</small><br />
                    <button onClick={openModal} class="btn btn-primary mt-3">BOOK APPOINTMENT</button>
                    <BookingForm modalIsOpen={modalIsOpen} closeModal={closeModal} cardData={cardData} date={date}/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;