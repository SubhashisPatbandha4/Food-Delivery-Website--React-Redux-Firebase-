import React from 'react'
import SubMenuContainer from '../subMenuContainer/subMenuContainer'
import RowContainer from '../rowContainer/RowContainer'
import "./dishContainer.css"
import ItemCard from '../IteamCard/ItemCard'
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
                <div className="disItemContainer">

                    <ItemCard imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7sLyJB6a6O8vqBhfRnlg_P4h7qv6KsJyip47vebL&s"} name={"Burger Bistro"} rating={5} price={"20"} />
                    <ItemCard imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7sLyJB6a6O8vqBhfRnlg_P4h7qv6KsJyip47vebL&s"} name={"Burger Bistro"} rating={5} price={"20"} />
                    <ItemCard imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7sLyJB6a6O8vqBhfRnlg_P4h7qv6KsJyip47vebL&s"} name={"Burger Bistro"} rating={5} price={"20"} />



                </div>
            </div>
        </div>
    )
}

export default DishContainer