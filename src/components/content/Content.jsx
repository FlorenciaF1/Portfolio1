import React from 'react'
import { Link } from "react-router-dom"
import './content.css'

const Content = () => {
  return (
    <div className='content-cont'>
      <div className='title'>
        <a>Florencia Fernandez</a>
        <a>a Frontend Developer</a>
      </div>
      <div className="grid-container">
        <Link to={`/about`} className="item1">About</Link>
        <Link to={`/work`} className="item2">Work</Link>
        <Link to={`/skills`} className="item3">Skills</Link>
        <Link to={`/contact`} className="item4">Contact</Link>
      </div>
    </div>
  )
}

export default Content