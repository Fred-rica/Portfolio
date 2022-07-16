import React from "react";
import About from "./About";
import Coding from "./Coding";
import Contact from "./Contact";
import Education from "./Education";
import Introduction from "./Introduction";
import Portfolio from "./Portfolio";


function Sections(){
    return(
        <div className="section-wrapper">
            <Introduction/>
            <About/>
            <Education/>
            <Coding/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}

export default Sections