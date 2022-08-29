import React, { Fragment } from 'react'

function Features({img, uName, uDetail, imgLine, textHead, textDesc, order, left, right}) {
  return (
    <Fragment>
        <section className="section-features">
            <div className="wrapper">
                <div className="row">
                    <div className="feature-img" style={{order: `${order}`}}>
                        <img src={img}/>
                        <span className="img-detail">
                            <h3>{uName}</h3>
                            <p>{uDetail}</p>
                        </span>
                        <span className="line-left"><img src={imgLine} alt="SVG of the line" /></span>
                    </div>

                    <div className="feature-desc" style={{marginLeft: `${left}`, marginRight: `${right}`}}>
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