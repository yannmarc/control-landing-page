import React, { Fragment, useState, useEffect } from 'react';
import Aos from 'aos';
import 'animate.css';

function Features({img, uName, uDetail, imgLine, textHead, textDesc, order, left, right}) {

    const viewPortWidth = window.innerWidth;
    const [isView, setView] = useState(false);
   
    useEffect(() => {
        if (viewPortWidth > 760) {
            setView(true)
        }
        Aos.init();
        Aos.refresh();

    }, [isView])



  return (
    <Fragment>
        <section className="section-features">
            <div className="wrapper">
                <div className="row">
                    <div className="feature-img" style={{order: `${order}`}}
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    >
                        <img src={img}/>
                        <span className="img-detail">
                            <h3>{uName}</h3>
                            <p>{uDetail}</p>
                        </span>
                        <span className="line-left"><img src={imgLine} alt="SVG of the line" /></span>
                    </div>

                    <div className="feature-desc" style={{marginLeft: `${left}`, marginRight: `${isView ? '4rem' : '0rem'}`}}
                    data-aos="fade-left"                    
                    >
                        <h2 className="text-heading">{textHead}</h2>
                        <p>{textDesc}</p>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Features