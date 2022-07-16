import React from "react";

function Footer(){
    return(
        <div className="socials">
            <div className="Social-Icon-Circle">
          <a href="https://github.com/Fred-rica" target="blank"
            ><i className="fa-brands fa-github Social-Icon fa-2x"></i ></a>
        </div>
        <div className="Social-Icon-Circle">
          <a href="https://www.instagram.com/fred_rica/" target="blank"
            ><i className="fa-brands fa-instagram Social-Icon fa-2x"></i></a>
        </div>
        <div className="last-Social-Icon-Circle">
          <a href="https://twitter.com/EFredrica" target="blank">
            <i className="fa-brands fa-twitter Social-Icon fa-2x"></i></a>
        </div>
        </div>
    );
}
export default Footer