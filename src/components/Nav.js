import React , {useState} from "react";

function Nav() {
const [openNav,setOpenNav] = useState(false)
const toggleNav=()=>{
  setOpenNav(!openNav)
}
  return (
    <div>
    <nav>
      {/* <!-- Logo and Name --> */}
      <div className="Logo-wrapper">
        <img className="logo" src="Favicon.png" alt="logo" />
        <div className="My-Name">
          Fredrica <br />
          Egbele
        </div>
      </div>
      {/* <!-- menu items --> */}
      <div className="Menu-Wrapper">
        <div>
          <a className="active" href="#">
            Home <i className="fa-solid fa-angle-down fa-fw"></i>
          </a>
        </div>
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#portfolio">Portfolio</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <a
            className="Nav-button"
            href="https://docs.google.com/document/d/1hzSN7ouaeqUoUtqJNCN7VJbNd4IlJdZS/edit?usp=sharingouid=102862413375125228835rtpof=truesd=true"
            target="_blank" rel="noreferrer noopener"
          >
            View My CV &nbsp; <i className="fa-solid fa-download fa-fw"></i>
          </a>
        </div>
      </div>
    </nav>
    
    {/* Mobile-Navbar */}

    <button onClick={toggleNav} className=" Menu-open">
        <i class="fa-solid fa-bars fa-2x"></i>
      </button>

      <aside className={openNav?"Mobile-Navbar":"Menu-close"} id="mobile-side-bar" >
        
          <button className="Nav-close-button" onClick={toggleNav}>
            <i class="fa-solid fa-xmark fa-3x "></i>
          </button>
        
        </aside>
    </div>
  );
}

export default Nav;
