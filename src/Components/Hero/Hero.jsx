// import React from 'react'
import './Hero.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { RiTwitterXLine } from 'react-icons/ri'
import ME from '../../Assets/PNG image 12.png'

function Hero() {
    return (
        <div className='Hero'>
            <div className='hero-container'>
                <div className='socials'>

                    <div><a href="" target='_blank'> <BsLinkedin size={18} /> </a></div>
                    <div><a href="" target='_blank'> <AiFillGithub size={18} /> </a></div>
                    <div><a href="" target='_blank'> <RiTwitterXLine size={18} /> </a></div>
                    <div><a href="" target='_blank'> <BsWhatsapp size={18} /> </a></div>
                    <div><a href="" target='_blank'> <BsInstagram size={18} /> </a></div>

                </div>
                <div className='hero-txt'>

                </div>
                <div className='hero-image'>
                    <img src={ME} />
                </div>
                <div className='scroll-down'>
                    <a href="#Contact">SCROLL DOWN</a>
                </div>

            </div>
        </div>
    )
}

export default Hero