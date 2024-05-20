import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import MainBlogs from './MainBlogs'
import YouMayLike from './YouMayLike'
import MembershipCards from './MembershipCards'
import './BlogDetail.scss'


function Blog() {
  return (
    <React.Fragment>
      <Navbar />
      <MainBlogs />
      <YouMayLike />
      <MembershipCards />
      <Footer />
    </React.Fragment>
  )
}

export default Blog
