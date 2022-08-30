import React, { Fragment } from 'react'
import images from '../constants/images'
import AOS from 'aos';
import "aos/dist/aos.css";

function Companies() {
    const random = Math.floor(Math.random() *4);

    const iconList = [images.iconPayPal, images.iconWebflow, images.iconGoogle, images.iconAdobe]
  return (
    <Fragment>
        <div className="showcase-container">
            <div className="wrapper">
                <div className="text">
                    <h2>Used by creative companies worldwide</h2>
                </div>

                <div className="icon-container">
                    <ul className="icons">
                        {
                            iconList.map((icon, index) => {
                                return (
                                    <li className='item' data-aos="fade-up" data-aos-delay={random * 500} data-aos-duration="700">
                                        <img src={icon}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Companies