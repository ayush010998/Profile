import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import JavascriptIcon from '@mui/icons-material/Javascript';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Ayush Anand </h2><br></br>
        <div className='prompt'><p><center>I am driven, dedicated and most importantly , focused on tasks. I'm always open to new challenging opportunities and happy to contribute as a Software Developer!</center></p>
        <a href='https://github.com/ayush010998'><GitHubIcon/></a>
            <a href='https://leetcode.com/Cayush/'><CodeIcon/></a>
            <a href="mailto:ayushanand428@gmail.com"><EmailIcon/></a>
            <a href='https://www.linkedin.com/in/ayush-anand-65ba9a1b2/'><LinkedInIcon/></a>
            <a href='https://www.hackerrank.com/ayushanand428?hr_r=1'><JavascriptIcon/></a>
                 </div>

      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              Reactjs, Redux, Html, Css, Bootstrap, jQuery, NPM, StyledComponents, ES6
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Nodejs, Expressjs, Mysql, Mongodb, Mongoose</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, Python</span>
          </li>
          <li className='item'>
            <h2>Computer Science Subjects</h2>
            <span>Data Structures and Algorithms, Operating Systems, Computer Networks, System Designs, 
                  DBMS, OOPS Concepts, Software Engineering, 
            </span>
          </li>
          <li className='item'>
            <h2>Tools</h2>
            <span>
              VSCode, Postman, Brackets, MongoDBCompass, Github, Babel.js 
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
