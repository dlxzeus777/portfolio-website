import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { SiFrontendmentor } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
    return (
        <footer>
                <h3 className='footer-name'>Sinka Laszlo</h3>
                <div className='icons'>
                    <a href='https://github.com/dlxzeus777' target="_blank" rel="noreferrer" className='icons-item'><BsGithub fontSize='2rem'/></a>
                    <a href='https://www.frontendmentor.io/profile/dlxzeus777' target="_blank" rel="noreferrer" className='icons-item'><SiFrontendmentor fontSize='2rem'/></a>
                    <a href='https://www.linkedin.com/in/sinka-laszlo-272973254/' target="_blank" rel="noreferrer" className='icons-item'><AiFillLinkedin fontSize='2rem' /></a>
                    <a href='https://twitter.com/dlxzeus777' target="_blank" rel="noreferrer" className='icons-item'><AiFillTwitterSquare fontSize='2rem' /></a>
                </div>
        </footer>
    )
}

export default Footer