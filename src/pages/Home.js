import '../styles/Home.css'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Typewriter } from 'react-simple-typewriter'
import { SiFirebase, SiMongodb, SiExpress, SiReact, SiMaterialui } from 'react-icons/si'
import { IoLogoNodejs  } from 'react-icons/io'
import { FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { RiNpmjsFill } from 'react-icons/ri'


function Home() {
  return (
    <div className='home'>
      <div className="about">

        <h2><Typewriter
          words={['Hi', 'I am silentCosmo']}
          loop={true}
          typeSpeed={110}
          deleteSpeed={60}

          cursor={true}
        /></h2>
        <div className="prompt">
          <p> A full-stack MERN developer, passionate about building web applications that solve problems and enhance the user experience.</p>
          <GitHubIcon />
        </div>
      </div>
      <div className="skills" id='skills'>
        <h1>Skills</h1>
        <ul className="li">
          <li className="item">
            <h2>Frontend</h2>

            <span>

              <div className="skill-container">

                <div className="icons"> <FaHtml5 className='ico' /> <br /> <span className="skill-text">HTML</span> </div>
                <div className="icons"> <TbBrandJavascript className='ico' /> <br /> <span className="skill-text">JSX</span> </div>
                <div className="icons"> <FaBootstrap className='ico' /> <br /> <span className="skill-text">Bootstrap</span> </div>
                <div className="icons"> <SiReact className='react' /> <br /> <span className="skill-text">React</span>  </div>
                <div className="icons"> <RiNpmjsFill className='ico' /> <br /> <span className="skill-text">NPM</span> </div>
                <div className="icons"> <SiMaterialui className='ico' />  <br /> <span className="skill-text">MaterialUI</span> </div>
                <div className="icons"> <FaCss3Alt className='ico' />  <br /> <span className="skill-text">CSS</span> </div>

              </div>
            </span>

          </li>
        </ul>
        <ul className="li">
          <li className="item">
            <h2>Backend</h2>
            <span>

              <div className="skill-container">

                <div className="icons"> <IoLogoNodejs className='ico' /> <br /> <span className="skill-text">NodeJS</span>  </div>
                <div className="icons"> <SiExpress className='ico' /> <br /> <span className="skill-text">ExpressJS</span> </div>
                <div className="icons"> <SiMongodb className='ico' />  <br /> <span className="skill-text">MongoDB</span> </div>
                <div className="icons"> <SiFirebase className='ico' /> <br /> <span className="skill-text">Firebase</span> </div>

              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home