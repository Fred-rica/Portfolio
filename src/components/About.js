import React from "react";

function About(){
    return(
      
        <div id="about"  className="Sections" >
            <div className="container">
            <header className="Section-Header">
              <div>About Me</div>
              <h3>my story</h3>
            </header>
            <p className="About-section-paragraph">
            With a drive to help businesses/brands provide users with the best online experience, I am committed to developing innovative software applications.
            I am consistently looking forward to working on new and challenging projects as they allow me to grow while delivering utmost satisfaction to my clients.

            </p>
            <p className="About-section-paragraph"> I have a proven track record of working well without supervision as well as delivering maximally within a team. I am passionate about people, good books and Music</p>
            
            <div className="Two-columgrid-wrapper grid">
              <div className="contact-details">
               
                <div className="contact-details-question">Work Status:</div>
                <div className="contact-details-answer"> Available</div>
                <div className="contact-details-question">phone:</div>
                <div className="contact-details-answer">+2348147058199</div>
              </div>
              <div className="contact-details">
                <div className="contact-details-question">City:</div>
                <div className="contact-details-answer">Lagos, Nigeria</div>
                <div className="contact-details-question">email:</div>
                <div className="contact-details-answer" >
                  egbelefredrica0@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default About