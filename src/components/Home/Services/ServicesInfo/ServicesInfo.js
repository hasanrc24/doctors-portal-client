import React from 'react';

const ServicesInfo = ({data}) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{height: '50px'}} src={data.icon} alt="" />
            <h5 className='mt-3 mb-4'>{data.title}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laborum provident praesentium quibusdam at quasi.</p>
        </div>
    );
};

export default ServicesInfo;