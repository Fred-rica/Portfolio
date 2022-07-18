import React from "react";

function Introduction(){

    return(
        <div id="intro" className="intro-section">
          <div className="container">
            <h1>
              Egbele <br />
              Fredrica
            </h1>
            <h4>FRONT-END DEVELOPER</h4>
            <p>
            Hello! I specialize in building the front end of web development, making the web a beautiful experience one app at a time.
            </p>
              <p>My goal is to ensure that your users have the best experience while interacting with your applications. I am just the front-end developer your team needs! </p>
            
            <div   className="Contact-button1">
              <a href="#contact"
                >Contact Me &nbsp; <i className="fa-solid fa-angle-right fa-fw"></i>
              </a>
            </div>
          </div>
        </div>
    );
}

export default Introduction