import React from 'react';
import Chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Appointment.css'

const AppointmentHeader = ({handleCalender}) => {
    return (
        <main className="row d-flex align-items-center" style={{height: '600px', margin: '0px 0px'}}>
            <div className="col-md-4 offset-md-1">
                <h1 className="pb-3">Appointment</h1>
                <Calendar
                    className="calender-style"
                    onChange={handleCalender}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;