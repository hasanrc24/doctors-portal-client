import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useAuth } from '../../../Contexts/AuthContext';
import Sidebar from '../Sidebar';

const AppointmentDashboard = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const {loggedInUser} = useAuth();

    const handleCalender = (date) => {
        setSelectedDate(date);

    }
        
    useEffect(()=>{
        fetch('https://dry-ocean-41051.herokuapp.com/appointmentsByDate', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })
        .then(res=> res.json())
        .then(data =>{
            setAppointments(data)
        })
    }, [selectedDate, loggedInUser.email])

    const backgroundStyle = {
        backgroundColor: '#F4FDFB',
        height: '100vh',
        margin: '0',
        padding: '0'
    }

    const listStyle = {
        backgroundColor: 'white',
        height: '75vh',
        margin: '0 40px',
        boxShadow: '0px 1px 10px rgba(0,0,0,0.2)',
        position: 'relative'
    }

    return (
        
        <div className="container-fluid row">
        <div className="col-md-2">
            <Sidebar />
        </div>
        <div className="col-md-10">
            <div style={backgroundStyle}>
                <p className="pt-3 pb-4">Appointments</p>
                <div className="row">
                    <div className="col-md-6">
                    <Calendar
                            className="calender-style"
                            onChange={handleCalender}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-md-6">
                        <div  style={listStyle} className="">
                            <div className="d-flex justify-content-between pt-4 ps-3 pe-3 pb-4"><h6>Appointments</h6><small>{selectedDate.toDateString()}</small></div>
                            
                            <>
                                {
                                    appointments.length ? <table class="table table-hover text-center">
                                    <thead>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Schedule</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            appointments.map(app => 
                                                <tr key={app._id}>
                                                <td>{app.name}</td>
                                                <td>{app.time}</td>
                                                <td><button className="btn">Not Visited</button></td>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                                :
                                <p className="text-center">No appointments available</p>
                                }
                            </>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AppointmentDashboard;