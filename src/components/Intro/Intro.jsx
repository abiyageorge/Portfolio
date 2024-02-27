import React from 'react'
import './intro.css';
import bg from '../../Assets/ProfileImage.jpg'
 import btnImg from '../../Assets/btn img.jpg'
 import { Link } from 'react-scroll';

function Intro() {
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Hello</span>
        <span className='introText'> I'm <span className='introName'>Abiya</span> <br />MearnStack Developer</span>
        <p className="introPara">I am a Mearn Stack Developer which develop,design <br/>and maintaining web applications
         using the Mearn technology stack</p>
        <Link><button className='btn'><img src={btnImg}  style={{height:"30px", width:"30px" }}  alt="Hire"className='btnImg' />Hire Me</button></Link>
    </div>
    <img src={bg} alt="Profile" className="bg" />
    
    </section>
  )
}

export default Intro