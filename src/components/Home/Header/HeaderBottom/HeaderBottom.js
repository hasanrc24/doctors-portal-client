import React from 'react';
import { faClock, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import HeaderBottomInfos from '../HeaderBottomInfos/HeaderBottomInfos';

const HeaderBottom = () => {

    const headerBottomInfo = [
        {
            title: 'Opening Hours',
            description: 'Lorem ipsum dolor sit amet consectetur',
            icon: faClock,
            background: 'blue'
        },
        {
            title: 'Visit our location',
            description: 'Brooklyn, NY, 100036, United States',
            icon: faPhone,
            background: 'black'
        },
        {
            title: 'Contact us now',
            description: '+1254896524',
            icon: faMapMarkerAlt,
            background: 'blue'
        }
    ]
    return (
        <div className="d-flex justify-content-center">
            <div className="row" style={{width:'80%'}}>
                {
                    headerBottomInfo.map(info => <HeaderBottomInfos info={info}></HeaderBottomInfos>)
                }
            </div>
        </div>
    );
};

export default HeaderBottom;