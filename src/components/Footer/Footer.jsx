import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
      <div className='footer-content'>
         <div className='footer-content-left'>
       <img src={assets.logo} alt="" />
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dicta voluptatem, obcaecati aspernatur qui id veniam ullam culpa distinctio ex. Placeat impedit voluptatem laborum nulla maiores nobis officia sunt corrupti.</p>
         <div className='footer-social-icons'>
          <img  src={assets.facebook_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
         </div>
         </div>
         <div className='footer-content-center'>
         <h2>Company</h2>
         <ul>
            <li>Home</li>
            <li>About us</li>

            <li>Delivery</li>
            <li>Privacy Policy</li>
         </ul>
         </div>
       <div className='footer-content-right'>
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+91-8676764467</li>
                <li>JayaFoods@tomato.com</li>
             </ul>
       </div>
            
      </div>
      <hr />
      <p className='footer-copyright'>Coopyright 2024 0 Tomato.com -All Right Reserved </p>
    </div>
  )
}

export default Footer