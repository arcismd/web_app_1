import React from 'react'
import { OurWorks } from '../components/OurWorks/OurWorks'
import { AboutUs } from '../components/AboutUs/AboutUs'
import { Feedback } from '../components/Feedback/Feedback'
import { Footer } from '../components/Footer/Footer'
import { SubNavbar } from '../components/Navbar/SubNavbar'

export const MainPage = () => {
  return (
    <>
      <SubNavbar 
        headerImg = 'header-hero-img'
        headerHero = 'header-hero'
        headerTitle = 'Noi le creăm, tu le dai valoare.'
      />
      <OurWorks />
      <AboutUs />
      <Feedback />
      <Footer />
    </>
  )
}
