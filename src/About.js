import React from 'react'
import './about.css'
import ProfileImage from './images/pfp.jpg'

const About = () => {

    return (
        <section className='about'>
            <div className='wrapper'>
                <h2 className='about-h2' id='about'>About me</h2>
                <div className='about-container'>
                    <div className='line vertical'></div>
                    <div className='line horizontal'></div>
                    <div className='line bot-vertical'></div>
                    <div className='line bot-horizontal'></div>
                    <img src={ProfileImage} alt='profile' className='profile-pic' />
                    <div className='about-text'>
                        <div className='h1-container'>
                            <h1 className='aboutme-h1'>About me</h1>
                        </div>
                        <div className='para-containers'>
                            <p>Nice to meet you! I'm <span className='about-name'>Sinka Laszlo</span><br />I am a front-end developer based in Hungary.</p>
                            <p>I'm passionate about building accessible web apps or websites that users love!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About