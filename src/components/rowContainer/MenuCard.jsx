import React from 'react'
import { BsArrowRightSquare } from "react-icons/bs"
const MenuCard = (props) => {

    return (
        <div className={`rowMenuCard ${props.isActive ? "active" : ""}`} onClick={() => props.getProductType(props.itemId)}>
            <div className="imgBox">
                <img src={props.img} alt="dish" />
            </div>
            <h3>
                {props.name}
            </h3>
            <i className="loadMenu">
                < BsArrowRightSquare />
            </i>
        </div >
    )
}

export default MenuCard
