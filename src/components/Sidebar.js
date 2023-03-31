import React from 'react'
import "../css/sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__profile">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAA
            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" alt="" />
            <div className="profile__details">
                <h4>Ayushman</h4>
                <p>Web Developer</p>
            </div>
            <div className="profile__stats">
                <span>Who viewed your profile</span>
            <span className='stat__number'>20</span>
            </div>
            <div className="profile__stats">
                <span>Connection <br /><b>Grow your network</b></span>
                <span className='stat__number'>150</span>
            </div>
        </div>
        <div className="sidebar__recent">
            <p>Recent</p>
            <p className="hash"><span>#</span>Branding</p>
            <p className="hash"><span>#</span>Marketing</p>
            <p className="hash"><span>#</span>Webdevelopment</p>
            <p className="hash"><span>#</span>programming</p>
            <p className="hash"><span>#</span>react js</p>
        </div>
    </div>
  )
}

export default Sidebar