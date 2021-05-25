import React from 'react';
import logo from '../../spreetrail.svg'
import './header.css'
const Header = ()=>{
    return(
        <div className="headerdiv">
        <header className="header">
            <img src={logo} alt="logo"/>
            <h4>SpreeTail Collection App</h4>
        </header>
        </div>
    )
}

export default Header