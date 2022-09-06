import React from 'react'
import { OurWorks } from '../components/OurWorks/OurWorks'
import { Footer } from '../components/Footer/Footer'
import { SubNavbar } from '../components/Navbar/SubNavbar'

export const OurWorksPage = () => {
  return (
    <div>
      <SubNavbar 
        headerImg = 'header-hero-img-works'
        headerHero = 'header-hero-works'
        headerTitle = 'Lucrările Noastre'
      />
      <OurWorks />
      <Footer />
    </div>
  )
}
