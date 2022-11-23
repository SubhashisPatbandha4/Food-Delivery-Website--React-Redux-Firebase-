import React from 'react'
import SubMenuContainer from '../subMenuContainer/subMenuContainer'
import "./dishContainer.css"
const DishContainer = ({ name }) => {
    return (
        <div>
            <div className="dishContainer">
                <div className="menuCard">
                    <SubMenuContainer name={name} />
                </div>
                <div className="rowContainer"></div>
                <div className="disItemContainer"></div>
            </div>
        </div>
    )
}

export default DishContainer