import React from 'react'
import { BsArrowRightSquare } from "react-icons/bs"
const MenuCard = ({ img, name }) => {
    return (
        <div className='rowMenuCard'>
            <div className="imgBox">
                <img src={img} alt="dish" />
            </div>
            <h3>
                {name}
            </h3>
            <i className="loadMenu">
                < BsArrowRightSquare />
            </i>
        </div>
    )
}

export default MenuCard
