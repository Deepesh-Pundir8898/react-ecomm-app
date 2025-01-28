import React from 'react'
import { useContext } from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import Context from '../../context/Context'

const Home = () => {
  const context = useContext(Context)
  return (
    <div>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
    </div>
  )
}

export default Home