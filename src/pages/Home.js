import '../styles/Home.css'
import React, { useEffect, useState } from 'react'
import { SiFirebase, SiMongodb, SiExpress, SiReact, SiMaterialui, SiTailwindcss, SiRedux } from 'react-icons/si'
import { SiAdobephotoshop, SiPhp, SiNextdotjs } from "react-icons/si"
import { FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import GitHubIcon from '@mui/icons-material/GitHub'
import { TbBrandJavascript } from 'react-icons/tb'
import { IoLogoNodejs  } from 'react-icons/io'
import { RiNpmjsFill } from 'react-icons/ri'
import { CgFigma } from "react-icons/cg";

import { GrMysql } from "react-icons/gr"
import Greeting from '../components/Greeting'


function Home() {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    // Set animateSkills to true after a delay (adjust the delay as needed)
    const timer = setTimeout(() => {
      setAnimateSkills(true);
    }, 500);

    return () => clearTimeout(timer); // Clear the timeout on component cleanup
  }, []);
  return (
    <div className='home'>
      <div className="about">
      <h4> <Greeting/> </h4>
        <h2><Typewriter
          words={['Hi',  "I'm SilentCosmo"]}
          loop={true}
          typeSpeed={110}
          deleteSpeed={60}

          cursor={true}
        /></h2>
        <div className="prompt">
          <p> A full-stack developer passionate about building web applications that solve problems and enhance the user experience.</p>
          <a href="https://github.com/silentcosmo"><GitHubIcon /></a>
        </div>
      </div>
      <div className={`skills ${animateSkills ? 'animate' : ''}`} id='skills'>
        <h1>Skills</h1>
        <ul className="li">
          <li className="item">
            <h2>Frontend</h2>

            <span>

              <div className="skill-container">
 
                <div className="icons"> <FaHtml5 className='ico' /> <br /> <span className="skill-text">HTML</span> </div>
                <div className="icons"> <TbBrandJavascript className='ico' /> <br /> <span className="skill-text">JSX</span> </div>
                <div className="icons"> <FaBootstrap className='ico' /> <br /> <span className="skill-text">Bootstrap</span> </div>
                <div className="icons"> <SiTailwindcss className='ico' /> <br /> <span className="skill-text">Tailwind</span> </div>
                <div className="icons"> <SiAdobephotoshop className='ico' id='ps' /> <br /> <span className="skill-text">Photoshop</span> </div>
                <div className="icons"> <SiReact className='ico' id='react' /> <br /> <span className="skill-text">React</span>  </div>
                <div className="icons"> <RiNpmjsFill className='ico' /> <br /> <span className="skill-text">&nbsp; &nbsp; NPM &nbsp; &nbsp;</span> </div>
                <div className="icons"> <SiRedux className='ico' /> <br /> <span className="skill-text">Redux</span> </div>
                <div className="icons"> <CgFigma className='ico' />  <br /> <span className="skill-text">Figma</span> </div>
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
              
                <div className="icons"> <SiFirebase className='ico' /> <br /> <span className="skill-text">Firebase</span> </div>
                <div className="icons"> <SiPhp className='ico' /> <br /> <span className="skill-text">PHP</span> </div>
                <div className="icons"> <IoLogoNodejs className='ico' /> <br /> <span className="skill-text">&nbsp; NodeJS &nbsp; &nbsp;</span>  </div>
                <div className="icons"> <SiNextdotjs className='ico' id='react' /> <br /> <span className="skill-text">NextJS</span>  </div>
                <div className="icons"> <SiExpress className='ico' /> <br /> <span className="skill-text">ExpressJS</span> </div>
                <div className="icons"> <GrMysql className='ico' />  <br /> <span className="skill-text">MySQL</span> </div>
                <div className="icons"> <SiMongodb className='ico' />  <br /> <span className="skill-text">MongoDB</span> </div>

              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home