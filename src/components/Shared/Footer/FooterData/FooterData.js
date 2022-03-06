import React from 'react';
import '../Footer.css'

const FooterData = ({footerData}) => {
    return (
        <div className="col-md-3">
            <div className="mt-5 pt-5 ftData">
                <div className="pb-3">
                    <h5 className="footer-title">{footerData.title}</h5>
                </div>
                <small>{footerData.data1}</small><br />
                <small>{footerData.data2}</small><br />
                <small>{footerData.data3}</small><br />
                <small>{footerData.data4}</small><br />
                <small>{footerData.data5}</small><br />
                <small>{footerData.data6}</small><br />
                <small>{footerData.data7}</small>
                <div className="footer-icons">
                    {footerData.icon1}
                    {footerData.icon2}
                    {footerData.icon3}
                </div>
                <div className="call-btn pt-4">
                    <small>{footerData.call}</small><br />
                    {footerData.button}
                </div>
            </div>
        </div>
    );
};

export default FooterData;