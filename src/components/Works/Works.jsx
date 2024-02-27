import React from 'react'
import './works.css'
import Portfolio1 from '../../Assets/Potfolio 1.png'
import Portfolio2 from '../../Assets/Portfolio 2.png'
import Portfolio3 from '../../Assets/Portfolio 3.png'
import Portfolio4 from '../../Assets/Portfolio 4.png'
import Portfolio5 from '../../Assets/Portfolio 5.png'
import Portfolio6 from '../../Assets/Portfolio 6.png'

export const Works = () => {
  return (
    <section id='works'>
         <h2 className="workstitle">My Portfolio</h2>
         <span className="worksDesc">I take pride in paying attention to the smallest
         details and making sure that my work is pixel and perfect.
              </span>
              <div className="worksImgs">
                <img src={Portfolio1}alt="" className="worksImg" style={{height:"300px", width:"300px"}} />
        
                <img src={Portfolio2} alt="" className="worksImg" style={{height:"300px", width:"300px"}}/>
                
                <img src={Portfolio3} alt="" className="worksImg" style={{height:"300px", width:"300px"}} />
                
                <img src={Portfolio4} alt="" className="worksImg"style={{height:"300px", width:"300px"}} />
              
                <img src={Portfolio5} alt="" className="worksImg" style={{height:"300px", width:"300px"}} />
                
                <img src={Portfolio6} alt="" className="worksImg" style={{height:"300px", width:"300px"}} />
              </div>
              <div className="workBtn">See More</div>
    </section>
  )
}

export default Works