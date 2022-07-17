import React, {useRef}from "react";
import emailjs from 'emailjs-com';

function Contact(){

  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm('service_5tl4s04', 'template_w4p5t4l', form.current, 'tZ0iWTuy96HYxUI6t')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Email sent,thank you!')
  };

    return(
        <div id="contact" className="Sections contact-section">
            <div className="container">
            <header className="Section-Header">
              <div>Contact</div>
              <h3>lets talk</h3>
            </header>
            <div className="Two-columgrid-wrapper">
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="contact-input-wrapper">
                    <p className="contact-input-label">
                      &nbsp;&nbsp; Full name <span>*</span> &nbsp; &nbsp;
                    </p>
                    <input
                      type="text"
                      name="user_name"
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
                      name="user_email"
                      className="contact-input-box"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div className="contact-input-wrapper">
                    <p className="contact-textarea-label">
                      &nbsp;&nbsp; message <span>*</span> &nbsp; &nbsp;
                    </p>
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="10"
                      className="contact-textarea"
                      placeholder="To write"
                    ></textarea>
                  </div>
                  <button type="submit" name="submit" className="Contact-button">
                    send message &nbsp;
                      <i className="fa-solid fa-angle-right fa-fw"></i>
                    
                  </button>
                </form>
              </div>
              <div className="My-contact-details-wrapper">
                <header className="My-contact-details-header">
                  <h2>Egbele Fredrica</h2>
                  <div>Front-end Developer</div>
                </header>
                <div className="My-contact-details">
                  <div className="contact-details-question">Work status:</div>
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