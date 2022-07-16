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
                    Women <br />
                    Techsters
                  </div>
                </div>
                <p>
                  Software engineering Fellow at  Women Techsters an initiative of Tech4dev in partnership with Microsft
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
                <p>
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
                <p>
                  B.Sc (Hons) Accounting, Landmark University, Omuaran, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Education