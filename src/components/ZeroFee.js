import React, { Fragment } from 'react'
import images from '../constants/images'

function ZeroFee() {
  return (
    <Fragment>
        <section className="zero-fee">
            <div className="wrapper">
                <h2>Checking, zero monthly fees</h2>
                <div className="row">
                    <div className="card">
                        <div className="card-img"><img src={images.iconWallet} alt="icon of a wallet" /></div>
                        <div className="card-desc">
                            <h3 className="head">Easy Payments</h3>
                            <p>Pay vendors and bills by ACH, wire, or check</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={images.iconDualCard} alt="icon of a wallet" /></div>
                        <div className="card-desc">
                            <h3 className="head">No minimum balance</h3>
                            <p>Unlimited transactions, no minimum balance required
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={images.iconLocation} alt="icon of a wallet" /></div>
                        <div className="card-desc">
                            <h3 className="head">Accesssible ATMs</h3>
                            <p>We have over 10,000 ATMs for you to use at your convenience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default ZeroFee