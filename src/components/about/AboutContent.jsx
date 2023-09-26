import React from 'react';
import {CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the default styles

const AboutContent = () => {
  const skills = [
    { label: 'Graphics', percentage: 90 },
    { label: 'Developing', percentage: 85 },
    { label: 'Marketing', percentage: 70 },
    { label: 'Writing', percentage: 60 },
    { label: 'UI/UX', percentage: 90 },
    { label: 'SEO', percentage: 50 },
  ];

  return (
    <div className="about-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-6">
            <div className="part-img">
              <img src="assets/images/about-img.png" alt="image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="part-txt">
              <h2 className="section-title">
                About <span>Me</span>
              </h2>
              <p>Hello there!
A very warm welcome to you and your dog at The Scentral Park - our very first attempt at creating a Sensory Park for the dogs that we consider family, but are still unable to provide with species-specific entertainment for their holistic health and well-being.
.</p>
              <p>
              As promised, we now have the initial set-up for our dogs to explore and use to the best of their ability without being commanded or conditioned to do so by us.

Since most of our dogs are living in urban environments, at first they would not know what to do in a vast open, quiet space that has so much to explore. 

              </p>
              {/* <div className="progress-wrap">
                {skills.map((skill, index) => (
                  <div className="progress-box" key={index}>
                    <div className="circle-progressbar">
                      <CircularProgressbarWithChildren
                        value={skill.percentage}
                        strokeWidth={8} 
                        styles={buildStyles({
                            pathColor: "#CB26B6",
                            textColor: "#212529",
                            transition: 'stroke-dashoffset 0.5s ease-in-out'
                          })}
                      >
                        <div className="txt progressbar-text-container">
                            <span className="percent">{skill.percentage}%</span>
                            <p>{skill.label}</p>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
