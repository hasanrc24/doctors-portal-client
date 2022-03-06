import React from 'react';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Doctors from './Doctors/Doctors';
import Footer from '../Shared/Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Treatment />
            <MakeAppointment />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;