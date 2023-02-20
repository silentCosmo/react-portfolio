import React from 'react'
import { useNavigate } from 'react-router-dom'

function Projectitem({image,name,id}) {
    const navigate = useNavigate()
  return (
    <div className="projectItem" onClick={()=>{navigate("/projects/"+id)}}>
        <div style={{backgroundImage: `url(${image})`}} className="proImg" />
        <h2 className=''>{name}</h2>
             
    </div>
  )
}

export default Projectitem