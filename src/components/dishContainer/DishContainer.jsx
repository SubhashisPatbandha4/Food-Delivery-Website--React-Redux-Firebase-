import React, { useState } from 'react'
import SubMenuContainer from '../subMenuContainer/subMenuContainer'
import RowContainer from '../rowContainer/RowContainer'
import "./dishContainer.css"
import ItemCard from '../IteamCard/ItemCard'
import { MenuItems, Items } from "../../components/Data"
const DishContainer = ({ name }) => {
    const [productType, setProductType] = useState(Items.filter(element => element.itemId === "burger01"))

    const getProductType = (itemId) => {
        setProductType(Items.filter(element => element.itemId === itemId))
       
    }

    return (
        <div>
            <div className="dishContainer">
                <div className="menuCard">
                    <SubMenuContainer name={name} />
                </div>
                <div className="rowContainer">
                    <RowContainer getProductType={getProductType} />
                </div>
                <div className="disItemContainer">

                    {
                        productType && productType.map(data => (

                            <ItemCard key={data.id} itemId={data.id} imgSrc={data.imgSrc} name={data.name} rating={data.ratings} price={data.price} />
                        ))
                    }



                </div>
            </div>
        </div>
    )
}

export default DishContainer