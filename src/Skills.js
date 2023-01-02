import React from 'react'
import './skills.css'
import { AiFillHtml5 } from 'react-icons/ai';
import { TbBrandCss3 } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { DiResponsive } from 'react-icons/di';
import { RxAccessibility } from 'react-icons/rx';
import SkillCards from './SkillCards';

const Skills = ({ theme }) => {

    return (
        <section className='skills'>
            <div className='wrapper'>
                <h2 className='skills-h2' id='skills'>Skills</h2>
                <div className='skills-container'>
                    <SkillCards
                        classname='html'
                        linehr={<div className='line hr'></div>}
                        linevr={<div className='line vr-skills'></div>}
                        image={<AiFillHtml5 />}
                        techs='HTML'
                        theme={theme}
                    />
                    <SkillCards
                        classname=''
                        image={<TbBrandCss3 />}
                        techs='CSS'
                        theme={theme}
                    />
                    <SkillCards
                        classname=''
                        image={<TbBrandJavascript />}
                        techs='JavaScript'
                        theme={theme}
                    />
                    <SkillCards
                        classname=''
                        image={<FaReact />}
                        techs='React'
                        theme={theme}
                    />
                    <SkillCards
                        classname=''
                        image={<DiResponsive />}
                        techs='Responsive Design'
                        theme={theme}
                    />
                    <SkillCards
                        classname='access'
                        linehr={<div className='line hr-access'></div>}
                        linevr={<div className='line vr-access'></div>}
                        image={<RxAccessibility />}
                        techs='Accessibility'
                        theme={theme}
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills