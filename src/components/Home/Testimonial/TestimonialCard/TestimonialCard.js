import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({data}) => {

    return (
        <div class="col-md-4 mb-5 pb-5">
            <div class="box-shadow">
            <div class="card-body m-4 p-4">
                <p class="card-text mb-5">{data.description}</p>
                <div className="user-info d-flex">
                    <img className="img-fluid img-height" src={data.image} alt="" />
                    <div className="name ms-3">
                        <h6 className="card-name">{data.name}</h6>
                        <p className="user-location">{data.location}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default TestimonialCard;