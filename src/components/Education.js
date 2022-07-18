import React from "react";

function Education(){

    return(
        <div className="Sections">
            <div className="container">
            <header className="Section-Header">
              <div>Education</div>
              <h3>studied at</h3>
            </header>
            <div className="Two-columgrid-wrapper">
              <div>
                <div className="Two-columgrid-content-header">
                  <div className="Two-columgrid-content-header-vertical">
                    JULY  - PRESENT
                  </div>
                  <div className="Two-columgrid-header">
                    Tech <br />
                    4Dev
                  </div>
                </div>
                <p className="education-paragraph">
                  Women Techsters Fellow, Software Engineering.<br/> An initiative of Tech4dev in partnership with Microsoft.
                </p>
              </div>
              <div>
                <div className="Two-columgrid-content-header">
                  <div className="Two-columgrid-content-header-vertical">
                    MAR-JUN 2022
                  </div>
                  <div className="Two-columgrid-header">
                    Black Girls <br />
                    In Tech
                  </div>
                </div>
                <p className="education-paragraph">
                  Front End developer trainee at Black Girls in Tech Nigeria.
                </p>
              </div>
              <div>
                <div className="Two-columgrid-content-header">
                  <div className="Two-columgrid-content-header-vertical">
                    2014-2018
                  </div>
                  <div className="Two-columgrid-header">
                    LMU <br />
                    Nigeria
                  </div>
                </div>
                <p className="education-paragraph bottom">
                  B.Sc (Hons) Accounting, Landmark University, Omuaran, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Education