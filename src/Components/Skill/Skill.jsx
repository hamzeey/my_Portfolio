import './Skill.css'
import JS from '../../Assets/JS.png'
import TS from '../../Assets/TS.png'
import Reactt from '../../Assets/React.png'
import Tailwind from '../../Assets/Tailwind.png'
import HTML from '../../Assets/HTML.png'
import CSS from '../../Assets/CSS.png'
import Git from '../../Assets/Git.png'
import Bootstrap from '../../Assets/Bootstrap.png'
import Firebase from '../../Assets/Firebase.png'


const data = [
    {
        id: 1,
        Image: JS,
        title: 'JavaScript'

    },
    {
        id: 2,
        Image: TS,
        title: 'TypeScript'

    },
    {
        id: 3,
        Image: Reactt,
        title: 'React JS'

    },
    {
        id: 4,
        Image: Tailwind,
        title: 'Tailwind'

    },
    {
        id: 5,
        Image: HTML,
        title: 'HTML'

    },
    {
        id: 6,
        Image: CSS,
        title: 'CSS'

    },
    {
        id: 7,
        Image: Git,
        title: 'Git'

    },
    {
        id: 8,
        Image: Bootstrap,
        title: 'Bootstrap'

    },
    {
        id: 9,
        Image: Firebase,
        title: 'Firebase'

    },
]

function Skill() {
    return (
        <section id='skill' className='skills'>
            <div className='skills-header'>
                <h2>Skills</h2>
            </div>

            <div className='skill-container'>

                <div className='container'>
                    {
                        data.map(({ id, Image, title }) => {
                            return (
                                <div className='outline' key={id}>
                                    <div className='circle'>
                                        <img src={Image} alt={title} />
                                    </div>
                                    <p>{title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>






        </section>
    )
}

export default Skill