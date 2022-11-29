import React from 'react'
import "./header.css"
import { BsSearch } from "react-icons/bs"
import { FiShoppingCart } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import logo from "../../Assets/logo.png"
import profilePic from "../../Assets/profilePic.jpg"
const Header = ({ getRightMenu, rightMenuActive }) => {

    const toggleRightMenu = () => {
        getRightMenu(!rightMenuActive)
    }
    return (
        <header className='container header_container '>
            <div className="headerItem">

                <div className="logo">

                    <img src={logo} alt='p' />
                </div>
                <div className='inputBox'>
                    <input type="text" placeholder='search' />
                    <BsSearch className='searchIcon' />
                </div>
                < div className="shoppingCart">
                    <FiShoppingCart className="cart" />
                    <div className='cartContent'>
                        <p>2</p>
                    </div>
                </div>
                < div className="profileContainer">

                    <div className='imageBox'>
                        <img src={profilePic} alt='profilePic'></img>
                    </div>
                    {/* <div className="userName">

                        <p className=''>Subhashis Patbandha</p>
                    </div> */}
                </div>
                <div className='toggleMenu'>
                    <GiHamburgerMenu className="toggleIcon" onClick={() => toggleRightMenu()} />
                </div>
            </div>
        </header>
    )
}

export default Header