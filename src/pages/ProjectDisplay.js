import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import '../styles/ProjectDisplay.css'
import { GitHub } from '@mui/icons-material'

function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectList[id-1]
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <a href={project.url}>
        <p className='blink'>click to explore project</p>
        <img src={project.image} alt="Project_View" className="img" />
      </a>

      <h3 className='pvskill'>
        <b>Tools : </b>
        {project.skills}  &nbsp;
      </h3>

      {project.description ?
        <div className='description'>
          <p> {project.description}  &nbsp; </p>
        </div> : ''}


      <p className='icons'>
        <a href={project.github}><GitHub style={{ fontSize: '50' }} /> </a>
        <br />
        <span className='skill-text' id='pvst'>View Git Repository</span>
      </p>

    </div>
  )
}

export default ProjectDisplay