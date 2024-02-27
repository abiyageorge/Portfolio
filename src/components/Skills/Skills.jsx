import React from 'react'
import './skills.css'
import reactDeveloper from '../../Assets/react developer.jpg'
import angularDeveloper from '../../Assets/angular developer.jpg'
import nodejsDeveloper from '../../Assets/node js developer.jpg'

function Skills() {
  return (
   <section id='skills'>
     <span className="skillTitle">What I do</span>
     <span className="skillDesc">I'm a  skilled and passionate software developer with skills in HTML,CSS and JavaScript, and expertise
      in frameworks like React, Node.js, and Angular. 
   </span>
    <div className="skillBars">
        <div className="skillbar">
        <img src={reactDeveloper} alt="ReactDeveloper" className="skillBarImg" />
        <div className="SkillBarText">
            <h2>React Developer</h2>
        </div>
        </div>
        <div className="skillbar">
        <img src={angularDeveloper} alt="AngularDeveloper" className="skillBarImg" />
        <div className="SkillBarText">
            <h2>Angular Developer</h2>
            </div>
        </div>
        <div className="skillbar">
        <img src={nodejsDeveloper} alt="NodeJsDeveloper" className="skillBarImg" />
        <div className="SkillBarText">
            <h2>NodeJs Developer</h2>
             </div>
        </div>
    </div>
   </section>
  )
}

export default Skills