// import React from 'react'
import './About.css'
import Abt from '../../Assets/img 2.1.png'
import CV from '../../Assets/cv.pdf'
function About() {
    return (
        <section id='About' className='abt'>
            <div className='abt-header'>
                <h2>ABOUT ME</h2>
            </div>
            <div className='abt-container'>
                <div className='abt-img'>
                    <img src={Abt} />
                </div>
                <div className='abt-text'>
                    <div className='abt-txt'>
                        <h3> Who is  <span className='name'>Habibullah?</span>  </h3>
                        <p className='p-abt'>Habibullah Hamza is a self-taught and self-motivated front end web developer based in Nigeria with about 2 years of experience in web development. Habibullah is also a Computer Science graduate from Bells University of Technology, Nigeria. He has a deep understanding of user interface design , programming language and frameworks such as React, JavaScript, Tailwind Css and more. Habibullah is a strong team player and he is always willing to help and go an extra mile to help the team achieve its goals. He is also committed to staying up-to-date with the latest technologies and industry trends, and is always looking for new technologies and opportunities to grow his skills.
                        </p>
                        <div className='bio-container'>
                            <div className='bio-1'>
                                <p>First Name : Habibullah</p>
                                <p>Last Name : Hamza</p>
                                <p>E-mail : Habibullahamza@gmail.com</p>
                                <p>Phone Number : +2348090709804</p>
                            </div>
                            <div className='bio-2'>
                                <p>Age : 22</p>
                                <p>Nationality : Nigerian </p>
                                <p>Spoken Languages : English </p>
                                <p>Experience : 2 Years +</p>
                            </div>
                        </div>
                        <div className='abt-btn'>
                            <a href={CV} download className='btn'>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About