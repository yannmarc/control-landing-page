import React, { Fragment, useState } from 'react'
import Button from '../Button'
import MenuItem from './MenuItem'
import images from '../../constants/images'
import { GiHamburgerMenu } from 'react-icons/gi';

function MenuLinks() {
    
    const [isActive, setActive] = useState(false);

    const navData = [
        {
            id: 1,
            title: 'Checking'
        },
        {
            id: 2,
            title: 'Payments'
        },
        {
            id: 3, 
            title: 'Contacts'
        }
    ]

    const handleClick = () => {
        setActive((prevState) => !prevState)
    }

  return (
    <Fragment>
        <nav className="nav-bar">
            <div className="nav-wrapper">
                <div className="nav-logo"><img src={images.logo} alt="control logo"/></div>
                <div className={ isActive ?"nav-mobile-container active": "nav-mobile-container"}>
                    <ul className="nav-link-container">
                        {
                            navData.map((data) => {
                                return (
                                    <MenuItem title={data.title} key={data.id} />
                                )
                            })
                        }
                        <Button bgColor={'#000000'} />
                    </ul>
                </div>
                <div className="menu">
                    <GiHamburgerMenu onClick={() => handleClick()} />
                </div>
            </div>
        </nav>
    </Fragment>
  )
}

export default MenuLinks