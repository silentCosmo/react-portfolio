import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import '../styles/ProjectDisplay.css'
import { GitHub } from '@mui/icons-material'

function ProjectDisplay() {
    const {id} = useParams()
    const project = ProjectList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <a href={project.url}>
          <p>click to view project</p>
        <img src={project.image} alt="Project_View" className="img" />
        </a>
        
        <p>
          <b>Skills: </b>
          {project.skills}  &nbsp;
          <a href={project.github}> <a href={project.github} ></a> <GitHub style={{fontSize:'large'}} /></a>
        </p>
        
    </div>
  )
}

export default ProjectDisplay