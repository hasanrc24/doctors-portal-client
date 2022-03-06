import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'

const MakeAppointment = () => {
    return (
        <div className="appointment-section mt-5 d-flex align-items-center mb-5 pb-5">
            <div className="image-section col-md-5 image">
                <img className="img-fluid" src={doctor} alt="" />
            </div>
            <div className="col-md-4 appointment">
                <h6 style={{color: "#19D3AE"}}>APPOINTMENT</h6>
                <h1 className="text-white pt-4 pb-4">Make an appointment Today</h1>
                <p className="text-white pb-5">It is a long established fact that a reader will be distractedby the readable
                    content of a page when looking at its 
                </p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default MakeAppointment;