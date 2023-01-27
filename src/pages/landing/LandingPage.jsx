import React from 'react'
import '../../App.css'
import Content from '../../components/content/Content'
import Explore from '../../components/explore/Explore'
import Navbar from '../../components/navbar/Navbar'
import Profile from '../../components/profile/Profile'



const LandingPage = () => {
  return (
    <div className='landing-cont'>
        <Navbar/>
        <Explore/>
        <Content/>
        <Profile/>
    </div>
  )
}

export default LandingPage