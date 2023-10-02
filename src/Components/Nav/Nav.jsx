import { useState } from 'react'
import './Nav.css'
import logo from '../../Assets/logo4.png'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'



const Menu = ({menuType,toggleState}) => {
    
  return (
    // used the keyword activate as a class name bc you already set active and it is messing with the behavior
    <ul className={`${menuType} ${toggleState? 'activate': 'inactive'}`}> 
    <li><Link to="Hero" spy={true} smooth={false} offset={-150} duration={200}>HOME</Link></li>
    <li><Link to="About" spy={true} smooth={false} offset={-110} duration={200}>ABOUT</Link></li>
    <li><Link to="skill" spy={true} smooth={false} offset={-110} duration={200}>SKILLS</Link></li>
    <li><Link to="Projects" spy={true} smooth={false} offset={-110} duration={200}>PROJECTS</Link></li>
    <li><Link to="Contact" spy={true} smooth={false} offset={-110} duration={200}>CONTACT</Link></li>
    </ul>
  )
}



function Nav() {

    const [toggle, setToggle] = useState(false)
    const handleclick = () => {
        setToggle(!toggle)
    }
    return (
        <>
        <nav>
            <div className='logo'>
                <img src={logo} />
            </div>
            <Menu menuType='menu-lg' />
           
            <div className='menu-icon' onClick={handleclick}>
                {toggle ? <GrClose size={30} /> : <GiHamburgerMenu size={30} />}
            </div>
        <Menu menuType='menu-sm' toggleState={toggle} />
        </nav>
        
        
        </>
    )
}

export default Nav