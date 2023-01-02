import React from 'react'
import './projects.css'
import tipCalculator from './images/tip-calculator.webp'
import tenzies from './images/tenzies.png'
import fylo from './images/fylo.webp'
import meme from './images/meme-generator.png'
import ProjectCards from './ProjectCards'

const Projects = ({ theme }) => {

  return (
    <section className='projects'>
      <div className='wrapper'>
        <h2 className='projects-h2' id='projects'>Projects</h2>
        <div className='project-container'>
          <ProjectCards
            img={tenzies}
            title='Tenzies App'
            live='https://dlxzeus777.github.io/tenzies-game-react/'
            code='https://github.com/dlxzeus777/tenzies-game-react'
            theme={theme}
          />
          <ProjectCards
            img={tipCalculator}
            title='Tip Calculator App'
            live='https://dlxzeus777.github.io/tip-calculator-app/'
            code='https://github.com/dlxzeus777/tip-calculator-app'
            theme={theme}
          />
          <ProjectCards
            img={meme}
            title='Random Meme Generator'
            live='https://dlxzeus777.github.io/meme-generator/'
            code='https://github.com/dlxzeus777/meme-generator'
            theme={theme}
          />
          <ProjectCards
            img={fylo}
            title='Fylo Landing Page'
            live='https://dlxzeus777.github.io/flyo-dark-theme-landing-page/'
            code='https://github.com/dlxzeus777/flyo-dark-theme-landing-page'
            theme={theme}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects