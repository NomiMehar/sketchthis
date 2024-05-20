import React from 'react'
import Navbar from '../navbar/Navbar'
import Banner from './Banner/Banner'
import ChooseUs from './ChooseUs/ChooseUs'
import AboutUs from './AboutUs/AboutUs'
import Blogs from './Blogs/Blog'
import Membership from './Membership/Membership'
import Footer from '../footer/Footer'
import Products from './Products/Products'
import Steps from './Steps/Steps'

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <ChooseUs />
      <AboutUs />
      <Steps />
      <Products />
      <Blogs />
      <Membership />
      <Footer />
    </React.Fragment>
  )
}

export default Home
