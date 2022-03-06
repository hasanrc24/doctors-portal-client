import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import './PatientsDashboard.css';

const PatientsDashboard = () => {

    const [allAppointments, setAllAppointments] = useState([]);
    useEffect(() =>{
        fetch('https://dry-ocean-41051.herokuapp.com/allAppointments')
        .then(res => res.json())
        .then(result =>{
            setAllAppointments(result);
        })
    }, [allAppointments]);

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 dashboard-bg">
                <h2 className="mt-4 ms-4">Patients</h2>
                <div className="all-patients">
                    <div className="d-flex justify-content-between pb-4">
                        <h3 className="brand-text">All Patients</h3>
                        <h5>Week picker</h5>
                    </div>
                    <div className="all-patients-table">
                                {
                                    allAppointments.length ? <table class="table table-hover text-center tbl">
                                    <thead className="thead">
                                        <tr>
                                        <th scope="col">Sr. No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tbody">
                                        {
                                            allAppointments.map((app, index) => 
                                                <tr key={app._id}>
                                                <td>{index+1}</td>
                                                <td>{app.name}</td>
                                                <td>{app.gender}</td>
                                                <td>{app.age}</td>
                                                <td>{app.weight}</td>
                                                <td>{app.phone}</td>
                                                <td><button className="btn">Not Visited</button></td>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                                :
                                <p className="text-center">No appointments available</p>
                                }
                            </div>
                </div>
            </div>
        </div>
    );
};

export default PatientsDashboard;