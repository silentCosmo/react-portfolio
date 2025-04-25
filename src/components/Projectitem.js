import React from 'react'
import { useNavigate } from 'react-router-dom'


function Projectitem({image,name,url,id}) {
    const navigate = useNavigate()
  return (
    <div className="projectItem" >
        <div style={{backgroundImage: `url(${image})`}} className="proImg" onClick={()=>{navigate("/projects/"+id)}} /> 
         <a href={url} target='_blank' ><h2 className=''>{name}</h2></a>
       
        
             
    </div>
  )
}

export default Projectitem
