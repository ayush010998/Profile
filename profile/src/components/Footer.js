import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import JavascriptIcon from '@mui/icons-material/Javascript';
import '../styles/Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://github.com/ayush010998'><GitHubIcon/></a>
            <a href='https://leetcode.com/Cayush/'><CodeIcon/></a>
            <a href="mailto:ayushanand428@gmail.com"><EmailIcon/></a>
            <a href='https://www.linkedin.com/in/ayush-anand-65ba9a1b2/'><LinkedInIcon/></a>
            <a href='https://www.hackerrank.com/ayushanand428?hr_r=1'><JavascriptIcon/></a>
        </div>
        <p>&copy; 2023 Ayush Anand</p>
      
    </div>
  )
}

export default Footer
