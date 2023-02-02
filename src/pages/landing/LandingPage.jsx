import React from 'react'
import '../../App.css'
import Content from '../../components/content/Content'
import Certificates from '../../components/certificates/Certificates'
import Navbar from '../../components/navbar/Navbar'
import Profile from '../../components/profile/Profile'



const LandingPage = () => {
  return (
    <div className='landing-cont'>
        <Navbar/>
        <Certificates/>
        <Content/>
        <Profile/>
    </div>
  )
}

export default LandingPage