import React from 'react'
import HeroSection from '../../components/HeroSection'
import CategoryCarousel from '../../components/CategoryCarousel'
import LatestJob from '../../components/LatestJob'
import Footer from '../../components/shared/Footer'

function Home() {
  return (
    <>
    <HeroSection />
    <CategoryCarousel />
    <LatestJob />
    <Footer />
    </>
  )
}

export default Home