import React from 'react'

const ProjectCards = ({ img, title, live, code, theme }) => {
  return (
    <div className={`project-card ${theme ? 'light' : ''}`}>
      <img src={img} alt='tenzies-project' className='project-images' />
      <div className='project-text'>
        <h2 className='projects-title'>{title}</h2>
        <div className='project-buttons'>
          <a href={live} target='_blank' rel='noreferrer' className={`live-view ${theme ? 'btn-live' : ''}`}>View Live</a>
          <a href={code} target='_blank' rel='noreferrer' className={`code-view ${theme ? 'btn-code' : ''}`}>View Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards