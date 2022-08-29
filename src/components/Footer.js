import React, { Fragment } from 'react'
import images from '../constants/images'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill, RiLinkedinFill } from 'react-icons/ri';


function Footer() {
  return (
    <Fragment>
        <footer className='footer-section'>
            <div className="wrapper">
                <div className="logo-icon">
                    <div className="logo"><img  src={images.logo} alt="Control logo" /></div>
                    <div className="l-icons">
                        <span className='icon'><FaFacebookF /></span>
                        <span className='icon'><RiInstagramFill/></span>
                        <span className='icon'><FaTwitter /></span>
                        <span className='icon'><RiLinkedinFill/></span>
                    </div>
                </div>

                <div className="footer-link">
                    <div className="footer-text">
                        <h4>Useful rewards, easy banking, designed for you. Control Bank.</h4>
                    </div>
                    <ul>
                        <h6 className="small-head">Company</h6>
                        <li><a href="">Checking</a></li>
                        <li><a href="">Payments</a></li>
                    </ul>
                    <ul>
                        <h6 className="small-head">Contact</h6>
                        <li><a href="">hello@control.com</a></li>
                        <li><a href="">(310) 455-1122</a></li>
                    </ul>
                    <div></div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="wrapper">
                    <h5>Copyright notice</h5>
                    <h5>Legal page | Legal page</h5>
                </div>
            </div>
        </footer>
    </Fragment>
  )
}

export default Footer