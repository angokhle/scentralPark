import React, { useContext } from "react";
import { DevolinContext } from "../../context/DevolinContext";

const BannerSection = () => {
    const {
      openAboutSection,
      openServiceSection,
      openPortfolioSection,
      openFaqSection,
      openGallerySection,
      openBlogSection,
      openContactSection,
      openLoginSection,
      openPetDetailsSection
    } = useContext(DevolinContext)
  return (
    <div className="banner">
      <div className="main-social">
        <a href="#" title="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" title="Twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" title="Linkedin">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        {/* <a href="#" title="Skype">
          <i className="fa-brands fa-skype"></i>
        </a> */}
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 nav-col">
            <div className="nav-wrap">
              <div className="nav-grid">
                <div className="single-item">
                  <a role="button" className="section-btn" data-section="about" onClick={openAboutSection}>
                    <span className="icon">
                      <i className="fa-thin fa-circle-user"></i>
                    </span>
                    <span className="txt">ABOUT</span>
                  </a>
                </div>
                <div className="single-item">
                  <a
                    role="button"
                    className="section-btn"
                    data-section="service"
                    onClick={openServiceSection}
                  >
                    <span className="icon">
                      <i className="fa-thin fa-gear"></i>
                    </span>
                    <span className="txt">SERVICE</span>
                  </a>
                </div>
                <div className="single-item">
                  <a
                    role="button"
                    className="section-btn"
                    data-section="portfolio"
                    onClick={openPortfolioSection}
                  >
                    <span className="icon">
                      <i className="fa-thin fa-folder-open"></i>
                    </span>
                    <span className="txt">PORTFOLIO</span>
                  </a>
                </div>
                <div className="single-item">
                  <a role="button" className="section-btn" data-section="faq" onClick={openFaqSection}>
                    <span className="icon">
                      <i className="fa-thin fa-circle-question"></i>
                    </span>
                    <span className="txt">FAQ</span>
                  </a>
                </div>
                <div className="single-item">
                  <a
                    role="button"
                    className="section-btn"
                    data-section="gallery"
                    onClick={openGallerySection}
                  >
                    <span className="icon">
                      <i className="fa-thin fa-image"></i>
                    </span>
                    <span className="txt">GALLERY</span>
                  </a>
                </div>
                <div className="single-item">
                  <a role="button" className="section-btn" data-section="blog" onClick={openPetDetailsSection}>
                    <span className="icon">
                      <i className="fa-thin fa-file-pen"></i>
                    </span>
                    <span className="txt">Pet Details</span>
                  </a>
                </div>
                <div className="single-item">
                  <a
                    role="button"
                    className="section-btn"
                    data-section="contact"
                    onClick={openContactSection}
                  >
                    <span className="icon">
                      <i className="fa-thin fa-user-plus"></i>
                    </span>
                    <span className="txt">Register</span>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-txt">
                            <h1>
                <span>Scentral Park</span>
              </h1>
              <h2>Devanahalli</h2>
              <p>
              “Unleash joy with a sensory garden tailor-made for your dogs! Learn how to spark their curiosity and promote healthy behaviors through nature.”

              </p>
              <div className="btn-box">
                <a
                  className="section-btn def-btn"
                  data-section="login"
                  role="button"
                  onClick={openLoginSection}
                >
                  <i className="fa-light fa-user"></i> Login
                </a>
                <a href="#" className="def-btn">
                  <i className="fa-light fa-file-lines"></i> Check Availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; All rights reserved by <span>devolin</span>
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
