import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './BookingForm.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    width: '60%'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
};
Modal.setAppElement('#root');

const BookingForm = ({modalIsOpen, closeModal, cardData, date}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
      data.service = cardData.title;
      data.date = date;
      data.time = cardData.time;
      data.appointmentCreateDate = new Date();
      
      fetch('https://dry-ocean-41051.herokuapp.com/addAppointments', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(success =>{
        if(success){
          closeModal();
          alert('Appointment created succesfully');
        }
      })
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4 className="brand-text text-center mt-4">{cardData.title}</h4>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" class="form-control" {...register("name", { required: true })} placeholder="Your Name" /><br />
                  {errors.name && <span className="text-danger">This field is required</span>}
                  <input type="phone" class="form-control" {...register("phone", { required: true })} placeholder="Phone Number" /><br />
                  {errors.name && <span className="text-danger">This field is required</span>}
                  <input type="email" class="form-control" {...register("email", { required: true })} placeholder="Email" /><br />
                  {errors.email && <span className="text-danger">This field is required</span>}
                  
                  <div className="form-group row">
                    <div className="col-md-4">
                      <select className="form-control" name="gender" {...register("gender", { required: true })}>
                        <option selected disabled={true} value="Not set">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select> 
                      {errors.gender && <span className="text-danger">This field is required</span>}  
                    </div>
                    <div className="col-md-4">
                      <input type="text" class="form-control" {...register("age", { required: true })} placeholder="Your Age" />
                      {errors.age && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-4">
                      <input type="text" class="form-control" {...register("weight", { required: true })} placeholder="Your Weight" />
                      {errors.weight && <span className="text-danger">This field is required</span>}
                    </div>
                  </div>
                  <input type="submit" className="btn d-block mt-3"/>
                </form>
            </Modal>

        </div>
    );
};

export default BookingForm;