import React from "react";



function Portfolio(){
    return(
        <div  id="portfolio" className="Sections">
            <div className="container">
            <header className="Section-Header">
              <div>Portfolio</div>
              <h3>Latest works</h3>
            </header>
            <div className="Two-columgrid-wrapper">
              <div className="portfolio-div">
                <a
                  href="https://freddies-todo-app.netlify.app/"
                  target="blank"
                >
                  <img
                    src="Assets/To-do-App.jpeg"
                    alt="To do App"
                    className="portfolio-picture"
                  />
                  <div className="portfolio-header2">
                    To Do App
                  </div>
                </a>
              </div>
              <div className="portfolio-div">
                <a
                  href="https://fredricae.netlify.app/"
                  target="blank"
                  >
                  
                  <img
                    src="Assets/Portfolio-website.jpeg"
                    alt="porfolio website "
                    className="portfolio-picture"
                  />
                  <div className="bottom portfolio-header2">
                    Portfolio website
                  </div>
                </a>
              </div>

              
            </div>
          </div>
        </div>
    );
}
export default Portfolio