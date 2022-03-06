import React from 'react';
import './Footer.css';
import FooterData from './FooterData/FooterData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const icon1 = <FontAwesomeIcon icon={faFacebook}/>
    const icon2 = <FontAwesomeIcon icon={faGooglePlus}/>
    const icon3 = <FontAwesomeIcon icon={faTwitter}/>

    const callButton = <button className="btn btn-primary">+2025550295</button>
    const footerData = [
        {
            title: ' ',
            data1: 'Emergency Dental Care',
            data2: 'Check Up',
            data3: 'Treatment of Personal Diseases',
            data4: 'Tooth Extraction',
            data5: 'Check Up'
        },
        {
            title: 'Services',
            data1: 'Emergency Dental Care',
            data2: 'Check Up',
            data3: 'Treatment of Personal Diseases',
            data4: 'Tooth Extraction',
            data5: 'Check Up',
            data6: 'Check Up',
            data7: 'Check Up'
        },
        {
            title: 'Oral Health',
            data1: 'Emergency Dental Care',
            data2: 'Check Up',
            data3: 'Treatment of Personal Diseases',
            data4: 'Tooth Extraction',
            data5: 'Check Up',
            data6: 'Check Up',
            data7: 'Check Up'
        },
        {
            title: 'Our Address',
            data1: 'New York - 101010 Hudson Yards',
            icon1: icon1,
            icon2: icon2,
            icon3: icon3,
            call: 'Call Now',
            button: callButton
        }
    ]
    return (
        <section className="footer-section">
            <div className="container">
                <div className="row">
                    {
                        footerData.map(footerData => <FooterData footerData={footerData}></FooterData>)
                    }
                </div>

                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;