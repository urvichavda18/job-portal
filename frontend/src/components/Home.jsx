import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import Browse from './Browse'
// import LatestJobCards from './LatestJobCards'
function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      {/* <LatestJobCards/> */}
      {/* <Browse/> */}
      <Footer />
    </div>
  )
}

export default Home
