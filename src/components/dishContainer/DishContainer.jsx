import React from 'react'
import SubMenuContainer from '../subMenuContainer/subMenuContainer'
import RowContainer from '../rowContainer/RowContainer'
import "./dishContainer.css"    
const DishContainer = ({ name }) => {
    return (
        <div>
            <div className="dishContainer">
                <div className="menuCard">
                    <SubMenuContainer name={name} />
                </div>
                <div className="rowContainer">
                    <RowContainer />
                </div>
                <div className="disItemContainer"></div>
            </div>
        </div>
    )
}

export default DishContainer