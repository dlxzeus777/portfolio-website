import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = ({theme}) => {

    const form = React.useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_3ruqujg', 'template_94yqwux', form.current, 'OObaJ0hlZkav0Ntk-')
          .then((result) => {
            alert("SUCCESS!");
          }, (error) => {
            alert("FAILED...", error);
          });
          e.target.reset();
      };

    return (
        <section className='contact'>
            <div className='wrapper'>
                <h2 className='contact-h2' id='contact'>Contact</h2>
                <p className='contact-p'>I'd love to hear from you!</p>
                <form ref={form} onSubmit={sendEmail} className='contact-container'>
                    <input type='text' placeholder='Name' name='user_name' className={`inputs ${theme ? 'light' : ''}`} required/>
                    <input type='email' placeholder='Email' name='user_email' className={`inputs ${theme ? 'light' : ''}`} required/>
                    <input type='text' placeholder='Subject' name='subject' className={`inputs ${theme ? 'light' : ''}`} required/>
                    <textarea name="message" className={`inputs ${theme ? 'light' : ''}`} placeholder="Message" required></textarea>
                    <button className='submit'>Submit</button>
                </form>
                <a href='#about' className='back-to-top'>⬆ Back to top</a>
            </div>

        </section>
    )
}

export default Contact