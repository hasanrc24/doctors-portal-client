import React, { useState } from 'react';
import Sidebar from '../Sidebar';

const AddDoctor = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(info)
    }
    const handleFileChange = async (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(file)
    }
    const handleSubmit = async (e) =>{
        
        const formData = new FormData()
        formData.append('file', file);
        formData.append('email', info.email);
        formData.append('name', info.name);

        fetch('https://dry-ocean-41051.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert("Doctor added successfully.");
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 dashboard-bg">
                <h3>Add Doctors</h3>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" onBlur={handleBlur} class="form-control" name="email" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" onBlur={handleBlur} class="form-control" name="name" placeholder="Name" />
                </div>
                <div class="mb-3 mt-3">
                    <input class="form-control" onChange={handleFileChange} type="file" id="formFile" />
                </div>              
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;