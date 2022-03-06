import React from 'react';
import { Link } from 'react-router-dom';
import Chair from '../../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center" style={{height: '600px', margin: '0px 0px'}}>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your new smile <br />Starts here</h1>
                <p className="" style={{color: '#c1c1c1'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis autem incidunt eius sed pariatur! Repellendus?</p>
                <Link to="/appointment"><button className="btn btn-primary">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;