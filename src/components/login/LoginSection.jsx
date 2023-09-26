import React, { useContext } from "react";
import LoginContent from "./LoginContent";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { DevolinContext } from "../../context/DevolinContext";

const LoginSection = () => {

    const {isLoginOpen,closeLoginSection} = useContext(DevolinContext)
    console.log(isLoginOpen)
  return (
    <OverlayScrollbarsComponent className={`contact section-panel ${isLoginOpen? 'active':''}`} id="contact">
      <button className="panel-close-btn" data-close="login" onClick={closeLoginSection}>
        <i className="fa-light fa-xmark"></i>
      </button>
      <LoginContent />
    </OverlayScrollbarsComponent>
  );
};

export default LoginSection;
