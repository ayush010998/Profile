import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import '../styles/Experience.css';
import WorkIcon from '@mui/icons-material/Work';


const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2017 - 2021' iconStyle={{background:'#3e497a', color:"#fff"}} 
        icon={<SchoolSharpIcon/>}>
          <h3 className='vertical-timeline-element-title'>Bangalore Institute Of Technology, Bengaluru, Karnataka, India</h3>
          <p>Bachelor Of Engineering BE</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2021 - present' iconStyle={{background:'#e9d35b', color:"#fff"}} 
        icon={<WorkIcon/>}>
          <h3 className='vertical-timeline-element-subtitle'>Wipro, Bengaluru, Karnataka, India</h3>
          <p>Software Engineer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  )
}

export default Experience
