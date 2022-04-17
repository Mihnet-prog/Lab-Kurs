import React from "react";
import Sidebar from "./Components/Topbar/Sidebar/Sidebar";
import Home from "./Components/Pages/Home/Home";
import Charts from "./Components/Charts/Charts";
import Topbar from "./Components/Topbar/Topbar";
import "./app.css"


function App() {
  return (
   <div>
     <Topbar/>
     <div className="container">
       <Sidebar/>
     
       <Home/>
     </div>
   </div>
  );
}

export default App;
