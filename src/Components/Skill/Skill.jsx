import './Skill.css'
import JS from '../../Assets/Js.png'
import TS from '../../Assets/Typescript .png'
import Reactt from '../../Assets/React2.png'
import Tailwind from '../../Assets/Tailwind 2.png'
import html from '../../Assets/HTML .png'
import css from '../../Assets/Css.png'
import git from '../../Assets/Git 1.png'
import bootstrap from '../../Assets/Bootstrap 2.png'
import firebase from '../../Assets/Firebase .png'


function Skill() {
    return (
        <section id='skill' className='skills'>
            <div className='skills-header'>
                <h2>Skills</h2>
            </div>

            <div className='skill-container'>

                <div className='container'>
                    <div className='outline'>
                        <div className='circle'>
                            <img src={JS} alt="javaScript" />
                        </div>
                        <p>JavaScript</p>
                    </div>

                    <div className='outline'>
                        <div className='circle'>
                            <img src={TS} alt="TypeScript" />
                        </div>
                        <p>TypeScript</p>
                    </div>

                    <div className='outline'>
                        <div className='circle'>
                            <img src={Reactt} alt="React" />
                        </div>
                        <p>React JS</p>
                    </div>

                    <div className='outline'>
                        <div className='circle'>
                            <img src={Tailwind} alt="Tailwind css" />
                        </div>
                        <p>Tailwind</p>
                    </div>

                    <div className='outline'>
                        <div className='circle'>
                            <img src={html} alt="HTML" />
                        </div>
                        <p>HTML</p>
                    </div>

                    <div className='outline'>
                        <div className='circle'>
                            <img src={css} alt="CSS" />
                        </div>
                        <p>CSS</p>
                    </div>

                    <div className='outline'>
                        <div className='circle'>
                            <img src={git} alt="GIT" />
                        </div>
                        <p>Git</p>
                    </div>

                    <div className='outline'>
                        <div className='circle'>
                            <img src={bootstrap} alt="BOOTSTRAP" />
                        </div>
                        <p>Bootstrap</p>
                    </div>

                    <div className='outline'>
                        <div className='circle'>
                            <img src={firebase} alt="FIREBASE" />
                        </div>
                        <p>Firebase</p>
                    </div>

                </div>
            </div>






        </section>
    )
}

export default Skill