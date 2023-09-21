import React from "react";
import { useState } from "react";
import axios from "axios";

const ContactContent = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phone: "",
    email: "",
    instaId: "",
    noOfPets: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform actions with the form data here
    try {
      // Make an HTTP POST request to your backend API
      const response = await axios.post('https://fwx72m-8080.csb.app/petOwners', formData);

      // Handle a successful response here (e.g., show a success message)
      console.log('Post request successful', response.data);
      alert("post request successful")

      // Optionally, reset the form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        phone: "",
        email: "",
        instaId: "",
        noOfPets: ""
      });
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error submitting data:', error);
      // Optionally, provide feedback to the user about the error
    
  };
  console.log(formData);
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

return (
  <div className="contact-content">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-5">
          <h2 className="section-title title-center">
            get in touch with <span>me</span>
          </h2>
        </div>
      </div>
      <div className="row g-0 justify-content-center">
        <div className="col-lg-6 col-md-7 col-sm-6 order-e">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required />
            </div>
            <div className="form-group">
              <label>Your email address</label>
              <input type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required />
            </div>
            <div className="form-group">
              <label>Number Of Pets</label>
              <input type="number"
                id="noOfPets"
                name="noOfPets"
                value={formData.noOfPets}
                onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Instatram ID</label>
              <input type="text"
                id="instaId"
                name="instaId"
                value={formData.instaId}
                onChange={handleInputChange} />
            </div>
            <button type="submit" className="def-btn">Submit</button>
          </form>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-6">
          <div className="contact-info">
            <div className="single-box">
              <div className="part-icon">
                <i className="fa-duotone fa-phone"></i>
              </div>
              <div className="part-txt">
                <a href="#">+12 345 678 900</a>
                <a href="#">+12 345 678 900</a>
              </div>
            </div>
            <div className="single-box">
              <div className="part-icon">
                <i className="fa-duotone fa-envelope"></i>
              </div>
              <div className="part-txt">
                <a href="#">example@gmail.com</a>
                <a href="#">example@gmail.com</a>
              </div>
            </div>
            <div className="single-box">
              <div className="part-icon">
                <i className="fa-duotone fa-map-location-dot"></i>
              </div>
              <div className="part-txt">
                <p>3687 Emma Street, Lubbock, Texas, 79423, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default ContactContent;
