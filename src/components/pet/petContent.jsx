import { createContext, useEffect, useRef, useState, useContext } from "react";
import axios from "axios";
const PetContext = createContext();
import { DevolinContext } from "../../context/DevolinContext";

const PetContent = () => {

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
  });

  const {isPetDetailsOpen,closePetDetailsSection} = useContext(DevolinContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            Pet Details
          </h2>
        </div>
      </div>
      <div className="row g-0 justify-content-center">
        <div className="col-lg-6 col-md-7 col-sm-6 order-e">
          <form className="contact-form" onSubmit={handleSubmit}>
          
        <table > 
            <tbody>
            <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
              <tr>
                <td>
                    <input type="text" />
                </td>
                <td>
                    <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                    <input type="text" />
                </td>
                <td>
                    <input type="text" />
                </td>
              </tr>
            </tbody>
        </table>
      
            <button style={{marginTop: "5%"}} type="submit" className="def-btn">Submit</button>
          </form>
        </div>
        
      </div>
    </div>
  </div>
);
};

export default PetContent;
