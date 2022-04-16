import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'>
        
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">UBT Admin Panel</span>
            </div>
            <div className="topRight">
                <div className="topbaricons">
                <NotificationsNoneIcon/>
                <span className="topiconbadge">
                    2
                </span>
                </div>
                <div className="topbaricons">
                <LanguageIcon/>
                </div>
                <div className="topbaricons">
                <SettingsIcon/>
                </div>
                <img src="https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?cs=srgb&dl=pexels-arsham-haghani-4298629.jpg&fm=jpg" alt="" className="TopAvatar" />
            </div>
 
        </div>

    </div>
  )
}
