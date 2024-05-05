import { useState } from "react";
import Sidebar from "./component/Sidebar";

const App = () => {
  // const [age, setAge] = useState(0);
  // let thisYear = new Date().getFullYear();
  // let bornYear = 2000;

  // const calculateAge = () => {
  //   setAge(thisYear - bornYear);
  // }

  const [showSidebar,setShowSidebar] = useState(false);

  const handleShow = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <>
    {!showSidebar && (
      <button onClick={handleShow} style={{transform:'rotate(90deg)', padding:'0.5rem', marginBottom:'3rem' }}> | | | </button>
    )}
      
    {showSidebar && (
<Sidebar handleShow={handleShow}/>
    )}
      
    </>
  )
}

export default App;