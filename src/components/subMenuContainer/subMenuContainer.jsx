
import React from 'react'
import { BsArrowRightSquare } from "react-icons/bs"
import "./subMenuContainer.css"

const subMenuContainer = ({ name }) => {
    return (
        <div className="subMenuContainer">
            <h3>{name}</h3>
            <div className="viewAll">
                <p>View All</p>
                <i>
                    <BsArrowRightSquare />
                </i>
            </div>
        </div>
    )
}

export default subMenuContainer
