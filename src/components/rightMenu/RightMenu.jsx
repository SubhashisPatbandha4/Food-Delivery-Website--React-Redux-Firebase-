import React from 'react'
import DebitCardContainer from './DebitCardContainer'
import "./rightMenu.css"
const RightMenu = () => {
    return (
        <div className='rightMenuContainer'>
            <div className="debitCardContainer">
                <div className="debitCard">
                    <DebitCardContainer />
                </div>
            </div>
        </div>
    )
}

export default RightMenu
