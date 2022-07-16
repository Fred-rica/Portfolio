import React from "react";

function Contact(){
    return(
        <div id="contact" className="Sections contact-section">
            <div className="container">
            <header className="Section-Header">
              <div>Contact</div>
              <h3>lets talk</h3>
            </header>
            <div className="Two-columgrid-wrapper">
              <div className="contact-form">
                <form action="">
                  <div className="contact-input-wrapper">
                    <p className="contact-input-label">
                      &nbsp;&nbsp; Full name <span>*</span> &nbsp; &nbsp;
                    </p>
                    <input
                      type="text"
                      className="contact-input-box"
                      placeholder="e.g Ade Musa Chidi"
                    />
                  </div>
                  <div className="contact-input-wrapper">
                    <p className="contact-input-label">
                      &nbsp;&nbsp; email address <span>*</span> &nbsp; &nbsp;
                    </p>
                    <input
                      type="email"
                      className="contact-input-box"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div className="contact-input-wrapper">
                    <p className="contact-textarea-label">
                      &nbsp;&nbsp; message <span>*</span> &nbsp; &nbsp;
                    </p>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="contact-textarea"
                      placeholder="To write"
                    ></textarea>
                  </div>
                  <div className="Contact-button">
                    <a href="#"
                      >send message &nbsp;
                      <i className="fa-solid fa-angle-right fa-fw"></i>
                    </a>
                  </div>
                </form>
              </div>
              <div className="My-contact-details-wrapper">
                <header className="My-contact-details-header">
                  <h2>Egbele Fredrica</h2>
                  <div>Front-end Developer</div>
                </header>
                <div className="My-contact-details">
                  <div className="contact-details-question">Age:</div>
                  <div className="contact-details-answer">24</div>
                </div>
                <div className="My-contact-details">
                  <div className="contact-details-question">Freelance:</div>
                  <div className="contact-details-answer">Available</div>
                </div>
                <div className="My-contact-details">
                  <div className="contact-details-question">phone:</div>
                  <div className="contact-details-answer">+2348137058166</div>
                </div>
                <div className="My-contact-details">
                  <div className="contact-details-question">Residence:</div>
                  <div className="contact-details-answer">Nigeria</div>
                </div>
                <div className="My-contact-details">
                  <div className="contact-details-question">Address:</div>
                  <div className="contact-details-answer">Lekki, Lagos</div>
                </div>
                <div className="My-contact-details">
                  <div className="contact-details-question">email:</div>
                  <div className="contact-email">
                    egbelefredrica0@gmail.com
                  </div>
                </div>
                <div className="signature">Fredrica</div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default Contact