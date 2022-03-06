import React from 'react';
import quote from '../../../images/Mask Group 7.png';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import TestimonialCard from './TestimonialCard/TestimonialCard';

const Testimonial = () => {

    const cardData = [
        {
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
            image: people1,
            name: "Winson Herry",
            location: "California"
        },
        {
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
            image: people2,
            name: "Winson Herry",
            location: "California"
        },
        {
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
            image: people3,
            name: "Winson Herry",
            location: "California"
        }
    ]
    return (
        <section className="container">
            <div className="pt-5 mb-5 pb-5 d-flex justify-content-between">
                <div className="left-part col-md-4">
                    <h6 style={{color: '#6ACECE', fontWeight: "bold"}}>TESTIMONIAL</h6>
                    <h1 style={{fontWeight: "normal"}}>What’s Our Patients Says</h1>
                </div>
                <div className="right-part col-md-2">
                    <img className="img-fluid" src={quote} alt="" />
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="row">
                    {
                        cardData.map(data => <TestimonialCard data={data}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;