import React from 'react'
import './projects.css'
import tipCalculator from './images/tip-calculator.webp'
import tenzies from './images/tenzies.png'
import fylo from './images/fylo.webp'
import meme from './images/meme-generator.png'

const Projects = ({toggle}) => {

  return (
    <section className='projects'>
      <div className='wrapper'>
        <h2 className='projects-h2' id='projects'>Projects</h2>
        <div className='project-container'>
          <div className='project-card'>
            <div className='img-container'>
              <img src={tipCalculator} alt='tip-calculator-project' className='project-images' />
            </div>
            <h2 className='projects-title'>Tip Calculator App</h2>
            <div className='project-buttons'>
              <a href='https://dlxzeus777.github.io/tip-calculator-app/' target='_blank' rel='noreferrer' className='live-view'>View Live</a>
              <a href='https://github.com/dlxzeus777/tip-calculator-app' target='_blank' rel='noreferrer' className='code-view'>View Code</a>
            </div>
          </div>
          <div className='project-card'>
            <img src={meme} alt='meme-generator' className='project-images' />
            <div className='project-text'>
              <h2 className='projects-title'>Random Meme Generator</h2>
              <div className='project-buttons'>
              <a href='https://dlxzeus777.github.io/meme-generator/' target='_blank' rel='noreferrer' className='live-view'>View Live</a>
              <a href='https://github.com/dlxzeus777/meme-generator' target='_blank' rel='noreferrer' className='code-view'>View Code</a>
            </div>
            </div>
          </div>
          <div className='project-card'>
            <img src={tenzies} alt='tenzies-project' className='project-images' />
            <div className='project-text'>
              <h2 className='projects-title'>Tenzies App</h2>
              <div className='project-buttons'>
              <a href='https://dlxzeus777.github.io/tenzies-game-react/' target='_blank' rel='noreferrer' className='live-view'>View Live</a>
              <a href='https://github.com/dlxzeus777/tenzies-game-react' target='_blank' rel='noreferrer' className='code-view'>View Code</a>
            </div>
            </div>
          </div>
          <div className='project-card'>
            <img src={fylo} alt='fylo-project' className='project-images' />
            <div className='project-text'>
              <h2 className='projects-title'>Fylo Landing Page</h2>
              <div className='project-buttons'>
              <a href='https://dlxzeus777.github.io/flyo-dark-theme-landing-page/' target='_blank' rel='noreferrer' className='live-view'>View Live</a>
              <a href='https://github.com/dlxzeus777/flyo-dark-theme-landing-page' target='_blank' rel='noreferrer' className='code-view'>View Code</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects