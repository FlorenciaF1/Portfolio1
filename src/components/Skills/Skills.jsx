import React from 'react'
import { Link } from "react-router-dom"
import './skills.css'

import { SiJavascript, SiRedux, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiSequelize } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { MdComputer, MdWork } from 'react-icons/md'
import { BsPeopleFill, BsLightbulb } from 'react-icons/bs'
import { GiTalk } from 'react-icons/gi'
import { GoChecklist, GoListOrdered } from 'react-icons/go'
import { FaRegLightbulb, FaUserPlus, FaHeart } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'
import { BiArrowBack } from 'react-icons/bi'


const Explore = () => {
    return (
        <div className='skills-container'>
            
            <Link to={`/`} className="button"><BiArrowBack className='BiArrowBack'/>Back</Link>
            <div className='tech-skills'>
                <div>
                    <MdComputer className="icon" />
                    <a>Tech Skills</a>
                </div>

                <div>
                    <SiJavascript className="icon" />
                    <a>JavaScript</a>
                </div>

                <div>
                    <FaReact className="icon" />
                    <a>React</a>
                </div>

                <div>
                    <SiRedux className="icon" />
                    <a>Redux</a>
                </div>

                <div>
                    <SiHtml5 className="icon" />
                    <a>HTML</a>
                </div>

                <div>
                    <SiCss3 className="icon" />
                    <a>CSS</a>
                </div>

                <div>
                    <SiNodedotjs className="icon" />
                    <a>Node.js</a>
                </div>

                <div>
                    <SiExpress className="icon" />
                    <a>Express js</a>
                </div>

                <div>
                    <SiSequelize className="icon" />
                    <a>Sequelize</a>
                </div>

            </div>

            <div className='soft-skills'>
                <div>
                    <BsPeopleFill className="icon" />
                    <a>Soft Skills</a>
                </div>

                <div>
                    <GiTalk className="icon" />
                    <a>Comunicativa</a>
                </div>

                <div>
                    <GoChecklist className="icon" />
                    <a>Dedicada</a>
                </div>

                <div>
                    <MdWork className="icon" />
                    <a>Responsable</a>
                </div>

                <div>
                    <GoListOrdered className="icon" />
                    <a>Organizada</a>
                </div>

                <div>
                    <FaRegLightbulb className="icon" />
                    <a>Creativa</a>
                </div>

                <div>
                    <FaHeart className="icon" />
                    <a>Empatica</a>
                </div>

                <div>
                    <RiTeamFill className="icon" />
                    <a>Colaborativa</a>
                </div>

                <div>
                    <FaUserPlus className="icon" />
                    <a>Positiva</a>
                </div>
            </div>
        </div>
    )
}

export default Explore