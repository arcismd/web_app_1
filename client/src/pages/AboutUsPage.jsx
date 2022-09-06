import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { SubNavbar } from '../components/Navbar/SubNavbar'
import { Feedback } from '../components/Feedback/Feedback'
import { AboutInfo } from '../components/AboutUs/AboutUsPageComponent/AboutInfo'


export const AboutUsPage = () => {
  return (
    <div>
    <SubNavbar 
      headerImg = 'header-hero-img-works'
      headerHero = 'header-hero-works'
      headerTitle = 'Despre Noi'
    />
    <AboutInfo />
    <Feedback />
    <Footer />
  </div>
  )
}
