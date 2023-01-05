import React from 'react'
import './projects.css'
import tipCalculator from './images/tip-calculator.webp'
import tenzies from './images/tenzies.png'
import fylo from './images/fylo.webp'
import meme from './images/meme-generator.png'
import fylo2 from './images/fylo-landing.jpg'
import huddle from './images/huddle-landing.jpg'
import dashboard from './images/time-tracker-dashboard.png'
import stoic from './images/stoic.png'
import ProjectCards from './ProjectCards'
import cryptocloud from './images/cryptocloud.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";



const Projects = ({ theme }) => {

  const projects = [
    {
      id: 1,
      image: cryptocloud,
      title: 'Crypto Cloud',
      live: 'https://dlxzeus777.github.io/Crypto-Cloud/',
      code: 'https://github.com/dlxzeus777/Crypto-Cloud'
    },
    {
      id: 2,
      image: tenzies,
      title: 'Tenzies App',
      live: 'https://dlxzeus777.github.io/tenzies-game-react/',
      code: 'https://github.com/dlxzeus777/tenzies-game-react'
    },
    {
      id: 3,
      image: tipCalculator,
      title: 'Tip Calculator App',
      live: 'https://dlxzeus777.github.io/tip-calculator-app/',
      code: 'https://github.com/dlxzeus777/tip-calculator-app'
    },
    {
      id: 4,
      image: meme,
      title: 'Random Meme Generator',
      live: 'https://dlxzeus777.github.io/meme-generator/',
      code: 'https://github.com/dlxzeus777/meme-generator'
    },
    {
      id: 5,
      image: fylo,
      title: 'Fylo Landing Page',
      live: 'https://dlxzeus777.github.io/flyo-dark-theme-landing-page/',
      code: 'https://github.com/dlxzeus777/flyo-dark-theme-landing-page'
    },
    {
      id: 6,
      image: huddle,
      title: 'Huddle Landing Page',
      live: 'https://dlxzeus777.github.io/Huddle-landing-page-with-curved-sections/',
      code: 'https://github.com/dlxzeus777/Huddle-landing-page-with-curved-sections'
    },
    {
      id: 7,
      image: dashboard,
      title: 'Time Tracking Dashboard',
      live: 'https://dlxzeus777.github.io/Time-tracking-dashboard/',
      code: 'https://github.com/dlxzeus777/Time-tracking-dashboard'
    },
    {
      id: 8,
      image: fylo2,
      title: 'Fylo Landing Page',
      live: 'https://dlxzeus777.github.io/Fylo-landing-page-with-two-column-layout/',
      code: 'https://github.com/dlxzeus777/Fylo-landing-page-with-two-column-layout'
    },
    {
      id: 9,
      image: stoic,
      title: 'Stoic Quote Generator',
      live: 'https://dlxzeus777.github.io/stoic-quotes/',
      code: 'https://github.com/dlxzeus777/stoic-quotes'
    },
  ]



  return (
    <section className='projects' id='projects'>
      <div className='wrapper'>
        <h2 className='projects-h2' id='projects'>Projects</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={35}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints= {{
          // when window width is <= 499px
          0: {
            slidesPerView: 1,
            spaceBetweenSlides: 40
        },
          
          500: {
              slidesPerView: 1,
              spaceBetweenSlides: 40
          },
          700: {
            slidesPerView: 2,
            spaceBetweenSlides: 35
        },
        1075: {
          slidesPerView: 3,
          spaceBetweenSlides: 30
      },
      }}
      >
          {projects.map((project) => {
            const { id, image, title, live, code } = project
            return (
              <SwiperSlide>
                <ProjectCards img={image} title={title} live={live} code={code} id={id} theme={theme}/>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Projects