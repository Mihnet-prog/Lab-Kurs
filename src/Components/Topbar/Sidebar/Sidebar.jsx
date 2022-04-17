import React from 'react'
import "./sidebar.css"
import {LineStyle, TrendingUp, Timeline, Person ,Inventory ,BarChart, AttachMoney, Mail ,Feedback , Message
,Assignment, Report } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        
        <div className="siderbarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitile">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sibearListItem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sibearListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sibearListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                    
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitile">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sibearListItem">
                        < Person className='sidebarIcon'/>
                        Users
                    </li>
                    <li className="sibearListItem">
                        <Inventory className='sidebarIcon'/>
                        Products
                    </li>
                    <li className="sibearListItem">
                        <AttachMoney className='sidebarIcon'/>
                        Transacion
                    </li>
                    <li className="sibearListItem">
                        <BarChart className='sidebarIcon'/>
                        Reports
                    </li>
                    
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitile">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sibearListItem">
                        <Mail/>
                        Mail
                    </li>
                    <li className="sibearListItem">
                        <Feedback/>
                        Feedback
                    </li>
                    <li className="sibearListItem">
                        <Message/>
                        Message
                    </li>
                    
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitile">Staff</h3>
                <ul className="sidebarList">
                    <li className="sibearListItem">
                        <Assignment/>
                        Manage
                    </li>
                    <li className="sibearListItem">
                        <Timeline/>
                        Analytics
                    </li>
                    <li className="sibearListItem">
                        <Report/>
                        Reports
                    </li>
                    
                </ul>
            </div>
           
        </div>

    </div>
  )
}
