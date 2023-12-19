import './Contact.css'
import mail from '../../Assets/mail.png'
import mobile from '../../Assets/mobile.png'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


function contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset()
        emailjs.sendForm('service_pujjdif', 'template_4p5l0dl', form.current, 'YxmP37SYVpyhYIlOs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='Contact' className='contact'>
            <div className='contact-header'>
                <h2>Get In Touch</h2>
                <h3>Contact Me</h3>
            </div>

            <div className='cnt-cont'>
                <div className='contactss'>
                    <img src={mail} alt="" />
                    <a href="mailto:habibullahamza@gmail.com" target='_blank' rel="noreferrer"  >Habibullahamza@gmail.com</a>
                </div>
                <div className='contactss'>
                    <img src={mobile} alt="" />
                    <a href="tel:+2348090709804" target='_blank' rel="noreferrer" >+2348090709804</a>
                </div>
            </div>

            <form className='cnt-text' ref={form} onSubmit={sendEmail}>

                <div className='fields'>
                    <input className='p-text' type="text" placeholder='Your Name' name='name' required />
                </div>

                <div className='fields'>
                    <input className='p-text' type="text" placeholder='E-mail' name='mail' required />
                </div>

                <div className='fields'>
                    <textarea className='p-text' type="text" placeholder='Your Message' name='message' required />
                </div>
                <button className='btn' type='submit'>Send Mesage</button>
            </form>
        </section>
    )
}

export default contact