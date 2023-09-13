import React from 'react'
import "../stylesheet/style.css"

const Header = () => {
  return (
    <>
    
    <div className=" mt-lg-4 ">
      <nav className="navbar navbar-light rounded navbar-expand-lg  "  aria-label="Eleventh navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="images/gokubhuti.svg" alt="Anuvuti Prakashan"  className="d-inline-block align-text-top img_size"  />
            
          </a>
          <span className="navbar-text navbar-brand h2 text-primary">Anuvuti Prakashan</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown09">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Header;