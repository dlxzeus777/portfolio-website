import React from 'react'
import './skills.css'
import { AiFillHtml5 } from 'react-icons/ai';
import { TbBrandCss3 } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { DiResponsive } from 'react-icons/di';
import { RxAccessibility } from 'react-icons/rx';

const Skills = () => {

    return (
        <section className='skills'>
            <div className='wrapper'>
                <h2 className='skills-h2' id='skills'>Skills</h2>
                <div className='skills-container'>
                    <div className='skills-cards html'>
                        <div className='line hr'></div>
                        <div className='line vr-skills'></div>
                        <AiFillHtml5 className='skills-images' />
                        <h3 className='technologies'>HTML</h3>
                    </div>
                    <div className='skills-cards'>
                        <TbBrandCss3 className='skills-images'/>
                        <h3 className='technologies'>CSS</h3>
                    </div>
                    <div className='skills-cards'>
                        <TbBrandJavascript className='skills-images' />
                        <h3 className='technologies'>JavaScript</h3>
                    </div>
                    <div className='skills-cards'>
                        <FaReact className='skills-images' />
                        <h3 className='technologies'>React</h3>
                    </div>
                    <div className='skills-cards'>
                        <DiResponsive className='skills-images' />
                        <h3 className='technologies'>Responsive Design</h3>
                    </div>
                    <div className='skills-cards access'>
                        <div className='line hr-access'></div>
                        <div className='line vr-access'></div>
                        <RxAccessibility className='skills-images' />
                        <h3 className='technologies'>Accessibility</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills