// import React from 'react'
import './Projects.css'
import space from '../../Assets/space-tourism.png'
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import weather from '../../Assets/weather3.png'

const data = [

    {
        id: 1,
        image: space,
        title: "Space Tourism",
        desc: "A website that gets space tourists started and excited to visit space."
    },

    {
        id: 2,
        image: weather,
        title: "Weather App",
        desc: "A weather app built using the AccuWeather API."
    }
]
function Projects() {
    return (
        <section id='Projects' className='projects'>
            <div className='projects-header'>
                <h2>PORTFOLIO PROJECTS</h2>
            </div>
            <div className='main-wrapper'>
                <div className="works-wrapper">

                    {/* map form here,*/}
                    {
                        data.map(({ id, image, title, desc }) => {
                            return (
                                <div className="contaiiner" key={id}>
                                    <div className="portfolio-img">
                                        <img src={image} alt="" />
                                        <div className="img-hover"></div>
                                    </div>
                                    <div className="portfolio-text">
                                        <h3 className='project-name'>{title}</h3>
                                        <p className='project-desc'>{desc}</p>
                                    </div>
                                    <div className='ctaa'>
                                        <a href="https://space-tourism-omega-nine.vercel.app/" className='btn2' target='_blank' rel="noreferrer">Live <CiShare1 size={20} /></a>
                                        <a href="https://github.com/hamzeey/space" className='btnn' target='_blank' rel="noreferrer">Github <FaGithub size={20} /></a>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </section>
    )
}

export default Projects