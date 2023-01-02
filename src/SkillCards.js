import React from 'react'

const SkillCards = ({ classname, linehr, linevr, image, techs, theme }) => {
    return (
        <div className={`skills-cards ${classname} ${theme ? 'light' : ''}`}>
            {linehr}
            {linevr}
            <span className={`skills-images ${theme ? 'light' : ''}`}>{image}</span>
            <h3 className={`technologies ${theme ? 'color' : ''}`}>{techs}</h3>
        </div>
    )
}

export default SkillCards