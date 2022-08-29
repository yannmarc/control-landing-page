import React, { Fragment } from 'react'
import images from '../../constants/images'

function HeroImg() {
  return (
    <Fragment>
        <div className="hero-img-container">
            <div className="img-container">
                <div className="img-cards">
                    <img className='front' src={images.cardUp} alt=" image card up "/>
                    <img  className='move-up' src={images.cardDown} alt='image card down' />
                </div>
                <div className="img-spriral">
                    <img src={images.spiral} alt="image of a spiral" />
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default HeroImg