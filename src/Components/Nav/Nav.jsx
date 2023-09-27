// import React from 'react'
import './Nav.css'
import logo from '../../Assets/logo4.png'
import { Link } from 'react-scroll'



function Nav() {
    return (
        <div>
            <nav className='navigation'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <ul className='menu'>
                    <Link to="Hero" spy={true} smooth={false} offset={-150} duration={200}>HOME</Link>
                    <Link to="About" spy={true} smooth={false} offset={-110} duration={200}>ABOUT</Link>
                    <Link to="skill" spy={true} smooth={false} offset={-120} duration={200}>SKILLS</Link>
                    <Link to="Projects" spy={true} smooth={false} offset={-110} duration={200}>PROJECTS</Link>
                    <Link to="Contact" spy={true} smooth={false} offset={-110} duration={200}>CONTACT</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav