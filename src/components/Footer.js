import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiGithub, FiGitlab } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Footer() {

    return (
        <div className="footer">
            <div className="copy">
                Ⓒ jceballos 2021
            </div>

            <ul className="slider">
                <NavLink 
                    className={({ isActive }) => isActive ? "item_slider_selected" : "item_slider"} 
                    to="/"
                ></NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "item_slider_selected" : "item_slider"} 
                    to="/about"
                ></NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "item_slider_selected" : "item_slider"} 
                    to="/resume"
                ></NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "item_slider_selected" : "item_slider"} 
                    to="/services"
                ></NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "item_slider_selected" : "item_slider"} 
                    to="/portfolio"
                ></NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "item_slider_selected" : "item_slider"} 
                    to="/contact"
                ></NavLink>
            </ul>
            
            <div className="social_networks">
                <a href="https://www.facebook.com/jceballos.u/" target="_blank" rel="noreferrer" ><FiFacebook className="social_icon"/></a>
                <a href="https://www.instagram.com/jceballos.u/" target="_blank" rel="noreferrer" ><FiInstagram className="social_icon"/></a>
                <a href="https://www.linkedin.com/in/jcebalus29/" target="_blank" rel="noreferrer" ><FiLinkedin className="social_icon"/></a>
                <a href="https://github.com/jceballos29" target="_blank" rel="noreferrer" ><FiGithub className="social_icon"/></a>
                <a href="https://gitlab.com/jceballos29" target="_blank" rel="noreferrer" ><FiGitlab className="social_icon"/></a>
            
            </div>
        </div>
    )
}

export default Footer