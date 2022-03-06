import React from 'react';
import Sidebar from '../Sidebar';

const PrescriptionsDashboard = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h1>Prescription</h1>
            </div>
        </div>
    );
};

export default PrescriptionsDashboard;