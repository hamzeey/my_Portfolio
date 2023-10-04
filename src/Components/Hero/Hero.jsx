// import React from 'react'
import './Hero.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { RiTwitterXLine } from 'react-icons/ri'

function Hero() {
    return (
        <div className='Hero'>
            <div className='hero-container'>
                <div className='socials'>

                    <div><a href="" target='_blank'> <BsLinkedin size={15} /> </a></div>
                    <div><a href="" target='_blank'> <AiFillGithub size={15} /> </a></div>
                    <div><a href="" target='_blank'> <RiTwitterXLine size={15} /> </a></div>
                    <div><a href="" target='_blank'> <BsWhatsapp size={15} /> </a></div>
                    <div><a href="" target='_blank'> <BsInstagram size={15} /> </a></div>

                </div>
                <div className='hero-txt'>

                </div>
                <div className='hero-image'>

                </div>
                <div className='scroll-down'>
                    <h4>SCROLL DOWN</h4>
                </div>

            </div>
        </div>
    )
}

export default Hero