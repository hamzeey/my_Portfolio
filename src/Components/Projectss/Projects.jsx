// import React from 'react'
import './Projects.css'
import space from '../../Assets/space-tourism.png'
import space2 from '../../Assets/space2.png'
import space3 from '../../Assets/space3.png'

function Projects() {
    return (
        <section id='Projects' className='projects'>
            <div className='projects-header'>
                <h2>PORTFOLIO PROJECTS</h2>
            </div>
            <div className='main-wrapper'>
                <div className="works-wrapper">

                    {/* this is where the map would start */}
                    <div className="contaiiner">
                        <div className="portfolio-img">
                            <img src={space} alt="" />
                            <div className="img-hover"></div>
                        </div>
                        <div className="portfolio-text">
                            <h3 className='project-name'>jmjndn</h3>
                            <p className='project-desc'>bak</p>
                        </div>
                        <div className='ctaa'>
                            <a href="" className='btn2'>Live</a>
                            <a href="" className='btnn'>Github</a>
                        </div>
                    </div>

                    <div className="contaiiner">
                        <div className="portfolio-img">
                            <img src={space2} alt="" />
                            <div className="img-hover"></div>
                        </div>
                        <div className="portfolio-text">
                            <h3 className='project-name'>jmjndn</h3>
                            <p className='project-desc'>bak</p>
                        </div>
                        <div className='ctaa'>
                            <a href="" className='btn2'>Live</a>
                            <a href="" className='btnn'>Github</a>
                        </div>
                    </div>

                    <div className="contaiiner">
                        <div className="portfolio-img">
                            <img src={space3} alt="" />
                            <div className="img-hover"></div>
                        </div>
                        <div className="portfolio-text">
                            <h3 className='project-name'>jmjndn</h3>
                            <p className='project-desc'>bak</p>
                        </div>
                        <div className='ctaa'>
                            <a href="" className='btn2'>Live</a>
                            <a href="" className='btnn'>Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects