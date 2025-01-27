import React from 'react'
import HeroSection from '../../components/HeroSection'
import CategoryCarousel from '../../components/CategoryCarousel'
import LatestJob from '../../components/LatestJob'
import Footer from '../../components/shared/Footer'
import useGetAppliedJob from '../../hooks/useGetAppliedJob'

function Home() {
  useGetAppliedJob()
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