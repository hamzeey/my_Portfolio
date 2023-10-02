import { useState } from 'react'
import './Nav.css'
import logo from '../../Assets/logo4.png'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

function Nav() {

    const [toggle, setToggle] = useState(false)
    const handleclick = () => {
        setToggle(!toggle)
    }
    return (
        <nav>
            <div className='logo'>
                <img src={logo} />
            </div>

            <ul className={`menu ${toggle ? 'active' : ''}`}>

                <Link to="Hero" spy={true} smooth={false} offset={-150} duration={200}>HOME</Link>
                <Link to="About" spy={true} smooth={false} offset={-110} duration={200}>ABOUT</Link>
                <Link to="skill" spy={true} smooth={false} offset={-110} duration={200}>SKILLS</Link>
                <Link to="Projects" spy={true} smooth={false} offset={-110} duration={200}>PROJECTS</Link>
                <Link to="Contact" spy={true} smooth={false} offset={-110} duration={200}>CONTACT</Link>
            </ul>
            <div className='menu-icon' onClick={handleclick}>
                {toggle ? <GrClose size={30} /> : <GiHamburgerMenu size={30} />}
            </div>
        </nav>
    )
}

export default Nav