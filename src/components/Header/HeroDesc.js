import React, { Fragment } from 'react'
import Button from '../Button'

function HeroDesc() {
  return (
    <Fragment>
        <div className="hero-desc">
            <div className="hero-text-container">
                <h1 className="hero-big-head">Useful rewards, easy banking, designed for you.</h1>
                <p className="hero-desc">Safe secure banking for creative professionals has arrived. We’re here to help.</p>
            </div>
            <div className="hero-btn">
                <Button bgColor={'#000000'} />
            </div>
        </div>
    </Fragment>
  )
}

export default HeroDesc