import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../Assets/Logo.webp'
import { Link } from 'react-scroll';
import menu from '../../Assets/Menu 1.jpg'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navBar'>
        <img src={Logo} alt='Logo' className='Logo' style={{height:"75px", width:"150px"}}/>
        <div className='desktopMenu'>
          <Link activeClass='active' to= 'intro' spy={true} smmoth={true} offset= {-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to= 'skills' spy={true} smmoth={true} offset= {-50} duration={500} className='desktopMenuListItem'>About</Link>
          <Link  activeClass='active' to= 'works' spy={true} smmoth={true} offset= {-60} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById ('contact').scrollIntoView({behavior:'smooth'})
        }}>
        <i class="fa-regular fa-message"></i> <span style={{paddingLeft:"10px"}} > Contact Me</span> </button>
        <img src={menu} alt='Menu' className='mobMenu' style={{height:"100px", width:"150px"}}onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu?' flex': 'none'}}>
          <Link activeClass='active' to= 'intro' spy={true} smmoth={true} offset= {-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to= 'skills' spy={true} smmoth={true} offset= {-50} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>About</Link>
          <Link  activeClass='active' to= 'works' spy={true} smmoth={true} offset= {-60} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Portfolio</Link>
          <Link  activeClass='active' to= 'contact' spy={true} smmoth={true} offset= {-60} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
   
  )
}

export default Navbar