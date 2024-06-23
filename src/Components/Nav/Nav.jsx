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
            {/* <div className='dior'>   */}
            <div className='logo'> 
                <img src={logo} />
            </div>

            <ul className={`menu ${toggle ? 'activate' : 'inactive'}`}>
            <div className='menu-icon abs' onClick={handleclick}>
                {toggle ? <GrClose size={35} />:   ''}
            </div>
            <li>      <Link to="Hero" spy={true} smooth={false} offset={-150} duration={200}>HOME</Link>  </li>
            <li>  <Link to="About" spy={true} smooth={false} offset={-75} duration={200}>ABOUT</Link> </li>  
            <li>  <Link to="skill" spy={true} smooth={false} offset={-100} duration={200}>SKILLS</Link></li> 
            <li>  <Link to="Projects" spy={true} smooth={false} offset={-100} duration={200}>PROJECTS</Link></li> 
            <li>  <Link to="Contact" spy={true} smooth={false} offset={-100} duration={200}>CONTACT</Link></li> 
               
            </ul>

            <div className='menu-icon' onClick={handleclick}>
                {toggle ?  "": <GiHamburgerMenu size={35} />}
            </div>
            {/* </div> */}
        </nav>
    )
}

export default Nav