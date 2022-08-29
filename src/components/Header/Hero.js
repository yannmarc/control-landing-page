import React, { Fragment } from 'react'
import HeroDesc from './HeroDesc'
import HeroImg from './HeroImg'

function Hero() {
  return (
    <Fragment>
        <header className='header'>
            <div className="wrapper flex flex-column">
                <HeroDesc />
                <HeroImg />
            </div>
        </header>
    </Fragment>
  )
}

export default Hero