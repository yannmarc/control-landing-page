import React, { Fragment, useEffect } from 'react';
import images from '../constants/images';
import Button from './Button';
import Aos from 'aos';
import 'animate.css';

function Section() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    })
  return (
    <Fragment>
        <section className="section-patner">
            <div className="wrapper">
                <div className="wrapper-heading">
                    <h2>Get peace of mind when you partner with us</h2>
                </div>

                <div className="row">
                    <div className="col-2">
                        <div className="text">
                            <div className="text-heading">
                            <h2>Flexible physical card, ready when you are.</h2>
                            </div>
                            <div className="text-desc">
                                <p>Our digital account numbers keep you from digging in your wallet, but it’s readily available to order when you need it. </p>
                                <Button bgColor={'#000000'}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 relate">
                        <div className="col-2-img" data-aos="flip-left" data-aos-duration="1300"><img src={images.card} alt="image of the card" /></div>
                        <span className="green-back" data-aos="zoom-in-down" data-aos-durtion="1500" data-aos-delay="1000"></span>
                        <span className="img-floatin"><img src={images.iconVector} alt="s line image vector" /></span>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Section