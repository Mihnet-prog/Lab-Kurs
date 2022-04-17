import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import "./app.css"
import sidebar from "./Components/sidebar/sidebar";



function App() {
  return (
   <div className="Cointainer">
     <Topbar/>

     <div className="sidebar">

       <sidebar/>
     </div>
   </div>
  );
}

export default App;
