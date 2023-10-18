import React, { useContext } from "react";
import PetContent from "./petContent";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { DevolinContext } from "../../context/DevolinContext";

const PetSection = () => {

    const {isPetDetailsOpen,closePetDetailsSection} = useContext(DevolinContext)
    console.log(isPetDetailsOpen)
  return (
    <OverlayScrollbarsComponent className={`contact section-panel ${isPetDetailsOpen? 'active':''}`} id="contact">
      <button className="panel-close-btn" data-close="login" onClick={closePetDetailsSection}>
        <i className="fa-light fa-xmark"></i>
      </button>
      <PetContent />
    </OverlayScrollbarsComponent>
  );
};

export default PetSection;
