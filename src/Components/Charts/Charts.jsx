import React from "react";
import "./Charts.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Charts() {
    const data = [
        {
          name: 'Page A',
          "Active User": 4000,
          pv: 2400,
          amt: 2400,
        },
        
      ];
    

  return (
    <div className="Chart">
        <h3 className="chartTitile">User Analitycs</h3>
       
           
       
    </div>
  )
}
