import React from 'react'
import Projectitem from '../components/Projectitem'
import { ProjectList } from '../helpers/ProjectList'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className="projects">
      <h1 className='projectTitle'>Projects</h1>
      <div className="projectList">
        {
          ProjectList.map((project,index)=>{
            return(
              <Projectitem id={index+1} name = {project.name} image={project.image} url={project.url} />
            )
          })
        }
        
        
      </div>
    </div>
  )
}

export default Projects