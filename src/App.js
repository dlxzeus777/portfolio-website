import React, { useState, useEffect } from 'react'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import './media.css'

const App = () => {

    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('themeg')) || false);

    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme)
    }

    useEffect(() =>
    {
        localStorage.setItem('theme', JSON.stringify(theme));
    },[theme])

    return (
        <>
            <Header
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <main>
                <About
                    theme={theme}
                />
                <Skills
                    theme={theme}
                />
                <Projects
                    theme={theme}
                />
                <Contact
                    theme={theme}
                />
            </main>
            <Footer />
        </>
    )
}

export default App