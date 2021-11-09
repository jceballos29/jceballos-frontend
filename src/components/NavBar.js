import React from 'react'
import logo from  '../images/logo.png'
import {FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><img alt="JCEBALLOS" src={logo} width="50px"/></Link>
            </div>
            <div className="menu">
                <FiMenu size="50px" style={{cursor: "pointer"}} onClick={() => {
                    console.log('SideBar')
                }}/>
            </div>
        </div>
    )
}

export default NavBar


// CgMenuRight