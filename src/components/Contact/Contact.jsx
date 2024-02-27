import React from 'react'
import './contact.css'
export const Contact = () => {
  return (
   <section id="contactPage">
    
        <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below</span>
      <form className="contactForm">
        <input type="text" className="name" placeholder='Your Name' />
        <input type="email" className="email"placeholder='Your Email' />
        <textarea className='msg' name="message"rows="5" placeholder='Your Message'></textarea>
    <button type='submit' value='Send' className="submitBtn">Submit</button>
    <div className="links">
          <i class="fa-brands fa-linkedin"></i>
         <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>

    </div>
      </form>
        </div>
    
   </section>
  )
}
