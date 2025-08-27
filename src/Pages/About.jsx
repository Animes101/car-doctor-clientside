import React from 'react'
import ReactHelmet from '../Components/Layout/ReactHelmet'
import Navbar from '../Components/Layout/Navbar'
import AboutHero from '../Components/AboutHero'

const About = () => {
  return (
    <section>
        <ReactHelmet pageName={'About page'} />
        
        {/* this is Navbar */}
        <Navbar />

        {/* this is about hero section */}
        <AboutHero />
    </section>
  )
}

export default About