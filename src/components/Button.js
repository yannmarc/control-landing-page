import React, { Fragment } from 'react'

function Button({ bgColor }) {

  return (
    <Fragment>
        <a href="#" className="button" style={{backgroundColor: `${bgColor}`}}><span>Get Started</span></a>
    </Fragment>
  )
}

export default Button