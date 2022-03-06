import React, { useEffect, useState } from 'react';
import './Doctors.css'
import DoctorsCard from './DoctorsCard';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://dry-ocean-41051.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <section className="container mb-5 pb-5">
            <h5 className="doc text-center mb-5 pb-3">Our Doctors</h5>

            <div className="d-flex justify-content-center">
                <div className="row">
                    {
                        doctors.map(docData => <DoctorsCard key={docData._id} docData={docData}></DoctorsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;