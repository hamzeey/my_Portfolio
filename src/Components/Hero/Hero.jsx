// import React from 'react'
import './Hero.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { RiTwitterXLine } from 'react-icons/ri'
import ME from '../../Assets/img 12.1.png'
import { useTypewriter } from 'react-simple-typewriter'
import CV from '../../Assets/cv.pdf'

function Hero() {
    const [typeEffect] = useTypewriter({
        words: ['Front End Developer', 'Freelancer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
    })
    return (
        <div className='Hero'>
            <div className='hero-container'>
                <div className='socials'>

                    <div><a href="https://www.linkedin.com/in/habibullah-hamza-1b3138245/" target='_blank' rel="noreferrer"> <BsLinkedin size={18} /> </a></div>
                    <div><a href="https://github.com/hamzeey" target='_blank' rel="noreferrer"> <AiFillGithub size={18} /> </a></div>
                    <div><a href="https://twitter.com/_hamzeey_" target='_blank' rel="noreferrer"> <RiTwitterXLine size={18} /> </a></div>
                    <div><a href="https://api.whatsapp.com/send?phone=2348090709804" target='_blank' rel="noreferrer"> <BsWhatsapp size={18} /> </a></div>
                    <div><a href="https://www.instagram.com/_hamzeey_/?next=%2F" target='_blank' rel="noreferrer"> <BsInstagram size={18} /> </a></div>

                </div>
                <div className='hero-txt'>
                    <div className='txt'>
                        <h5>     <span className='wave'>👋</span> Hello, I am </h5>
                        <h1>HABIBULLAH</h1>
                        <h2>{typeEffect}</h2>
                    </div>
                    <div className='cta'>
                        <a href={CV} download className='btn'>Download CV</a>
                        <a href="#Contact" className='btn2'>{"Let's Talk"}</a>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={ME} />
                </div>
                <div className='scroll-down'>
                    <a href="#Footer">SCROLL DOWN</a>
                </div>

            </div>
        </div>
    )
}

export default Hero