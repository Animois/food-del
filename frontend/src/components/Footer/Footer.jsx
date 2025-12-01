import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo' src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis nesciunt debitis ducimus. Aspernatur id officiis sed provident aperiam nemo deleniti consequuntur assumenda asperiores quos? Odio, labore! Corrupti, eum maxime?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>      Company          </h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+8801627976351</li>
                    <li>contact@food_express.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © Food-Express.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer