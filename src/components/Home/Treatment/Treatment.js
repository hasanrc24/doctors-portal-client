import React from 'react';
import treatment from '../../../images/treatment.png';
import './Treatment.css';

const Treatment = () => {
    return (
        <div className="d-flex mt-5 pt-5 margin">
            <div className="image-section col-md-4 offset-md-1">
                <img className="img-fluid" src={treatment} alt="img" />
            </div>
            <div className="treatment-section col-md-4 ms-5 mt-5">
                <h2>Exceptional Dental <br /> Care, on Your Terms</h2>
                <p className="text-secondary mt-5 mb-5">It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its 
                    layout. The point of using Lorem Ipsumis that it has
                    a more-or-less normal distribution of letters,as opposed
                    to using ‘Content here, content here’, making it look like
                    readable English. Many desktop publishing packages 
                    and web page 
                </p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default Treatment;