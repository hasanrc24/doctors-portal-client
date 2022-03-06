import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesInfo from './ServicesInfo/ServicesInfo';


const Services = () => {

    const serviceData = [
        {
            icon: fluoride,
            title: 'Fluoride Treatment',
            description: ''
        },
        {
            icon: cavity,
            title: 'Cavity Filling',
            description: ''
        },
        {
            icon: whitening,
            title: 'Teeth Whitening',
            description: ''
        }
    ]
    return (
        <section className="pb-5">
            <div className='text-center mb-5'>
                <h5 style={{color: '#1cc7c1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center pt-5">
                <div className="row" style={{width:'80%'}}>
                    {
                        serviceData.map(data => <ServicesInfo data={data}></ServicesInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;