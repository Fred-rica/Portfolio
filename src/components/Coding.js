import React from "react";

function Coding(){

    return(
        <div className="Sections">
            <div className="container">
            <header className="Section-Header">
              <div>
                Coding <br />
                Skills
              </div>
              <h3>developing on</h3>
            </header>
            <div className="Coding-Skills-wrapper">
              <div>
                <div className="coding-skills-circle">
                  <i className="fa-brands fa-html5 fa-4x coding-skills-icon"></i>
                </div>
                <div className="Coding-skills-header">HTML</div>
                
              </div>
              <div>
                <div className="coding-skills-circle">
                  <i className="fa-brands fa-css3-alt fa-4x coding-skills-icon"></i>
                </div>
                <div className="Coding-skills-header">CSS</div>
                
              </div>
              <div>
                <div className="coding-skills-circle">
                  <i className="fa-brands fa-js fa-4x coding-skills-icon"></i>
                </div>
                <div className="Coding-skills-header">JavaScript</div>
                
              </div>
              
               
              <div>
                <div className="coding-skills-circle">
                  <i className="fa-brands fa-react fa-4x coding-skills-icon"></i>
                </div>
                <div className="Coding-skills-header">ReactJS</div>
                
              </div>
          
            </div>
          </div>
        </div>
    );
}

export default Coding