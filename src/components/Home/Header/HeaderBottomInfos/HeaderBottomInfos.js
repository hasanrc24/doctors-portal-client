import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HeaderBottomInfos.css'

const HeaderBottomInfos = ({info}) => {
    return (
        <div className="col-md-4 paddin text-white ">
            <div className={`d-flex justify-content-center info-${info.background} business-info rounded`}>
                <div className="d-flex align-items-center pe-4">
                    <FontAwesomeIcon icon={info.icon} className="icons"/>
                </div>
                <div className="">
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottomInfos;