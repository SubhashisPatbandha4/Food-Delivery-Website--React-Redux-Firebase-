import React from 'react'
import { CiCircleRemove } from "react-icons/ci"
import { IoIosAddCircleOutline } from "react-icons/io"
import "./cartItem.css"

const CartItem = ({ name, imgSrc, quantity, price }) => {
    return (
        <div className="cartItems">
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>
            <div className="itemSection">
                <h2 className="itemName">{name}</h2>
                <div className="itemQuantity">
                    <span>x {quantity}</span>
                    <div className="quantity">

                        <IoIosAddCircleOutline className='itemAdd' />
                        <CiCircleRemove className='itemRemove' />

                    </div>
                </div>
            </div>
            <p className="itemPrice">
                <span className="dolorSign">$</span>
                <span className="itemPriceValue">{price}</span>
            </p>
        </div>
    )
}

export default CartItem
