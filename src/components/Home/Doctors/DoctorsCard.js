import React, { useEffect, useState } from 'react';
import img from '../../../images/doctor-small.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const DoctorsCard = ({docData}) => {

    const {name, image} = docData;
    return (
        <div className="col-md-4">
            <div class="card-body text-center">
                    <img className="img-fluid" style={{height: '200px'}} src={`data:image/png;base64,${image}`} alt="" />
                    <p className="doc-name">{name}</p>
                    {/* <div className="d-flex justify-content-center">
                        <FontAwesomeIcon className="phn-icon" icon={faPhoneAlt}/>
                        <p className="doc-phone">{docData.phone}</p>
                    </div> */}
                </div>
        </div>
    );
};

export default DoctorsCard;