import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import {} from 'react-icons'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#101D31'> 
            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='12-3-1947'
            icon={<SchoolIcon/>}
            iconStyle={{backgroundColor:'#101D31', color:'mintcream'}}
            >
              <h3>My School, Place, state</h3>
              <p>Certificate name</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='12-3-1947'
            icon={<SchoolIcon/>}
            iconStyle={{backgroundColor:'#101D31', color:'mintcream'}}
            >
              <h3>My School, Place, state</h3>
              <p>Certificate name</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='12-3-1947'
            icon={<SchoolIcon/>}
            iconStyle={{backgroundColor:'#101D31', color:'mintcream'}}
            >
              <h3>My School, Place, state</h3>
              <p>Certificate name</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='12-3-1947'
            icon={<SchoolIcon/>}
            iconStyle={{backgroundColor:'#101D31', color:'mintcream'}}
            contentStyle={{borderTop: '7px solid  #101D31'}}
            
            >
              <h3>My School, Place, state</h3>
              <p>Certificate name</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='12-3-1947'
            icon={<SchoolIcon/>}
            iconStyle={{backgroundColor:'#101D31', color:'mintcream'}}
            >
              <h3>My School, Place, state</h3>
              <p>Certificate name</p>
            </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience