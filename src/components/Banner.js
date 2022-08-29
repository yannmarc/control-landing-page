import React from 'react'
import Button from './Button'

function Banner() {
  return (
    <section className="section-banner">
        <div className="wrapper">
            <div className="container">
                <div className="text-section">
                    <h1>Let’s grow your business,
                    together. </h1>
                    <Button bgColor={'#D1EE1E'} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner