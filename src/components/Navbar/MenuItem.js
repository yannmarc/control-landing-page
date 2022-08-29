import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

function MenuItem({ title }) {
  return (
    <Fragment>
        <li className="nav-link">
            <motion.a href="" className="nav-item"
              whileHover={{
                fontWeight: 600,
                color: '#D1EE1E'
              }}
            >{title}</motion.a>
        </li>
    </Fragment>
  )
}

export default MenuItem