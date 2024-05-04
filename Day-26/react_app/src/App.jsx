import React from "react";
import './style.css';
import Navlist from "./component/Navlist";
import Navlogo from "./component/Navlogo";
import Logo from "./assets/iconpal21.png"

const App = () => {
  const linklist = ["Home", "About", "Contact"];

  const handleClick  = () => {
    console.log("event")
  }
  const handleRedirect  = (item) => {
    console.log(`event redirect ${item}`)
  }

  return(
    <>
      <div>
        <div className="navbar-wraper">
          <div className="navbar-container">
            <Navlogo Logo={Logo}/>
            <Navlist data={linklist} handleRedirect={handleRedirect}/>
            <button onClick={handleClick}>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;