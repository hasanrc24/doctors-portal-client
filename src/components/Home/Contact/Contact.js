import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section pb-5 mb-5">
            <div className="contact-title text-center">
                <h5>CONTACT US</h5>
                <h1 className="text-white">Always connect with us</h1>
            </div>

            <div className="form-section text-center">
                <form>
                    <div class="form-group">
                        <input type="email" class="form-control f1" id="" aria-describedby="emailHelp" placeholder="Email Address*" />
                    </div>
                    <div class="form-group pt-4 pb-4">
                        <input type="text" class="form-control f1" id="" placeholder="Subject*" />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control f1" id="" rows="5" placeholder="Your Message*"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mt-4 sub-p">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;