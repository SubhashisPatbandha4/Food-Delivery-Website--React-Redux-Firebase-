import React, { useState, useEffect } from 'react'
import { CiCircleRemove } from "react-icons/ci"
import { IoIosAddCircleOutline } from "react-icons/io"
import "./cartItem.css"
import { useSelector, useDispatch } from 'react-redux'
import { updateCart } from "../../actions"
const CartItem = ({ itemId, name, imgSrc, price }) => {



    const { cart } = useSelector(state => state.updateCart)

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1)
    const [itemPrice, setItemPrice] = useState(parseInt(quantity) * parseFloat(price))
    useEffect(() => {
        setItemPrice(parseInt(quantity) * parseFloat(price))

    }, [quantity, cart]);
    const updateQuantity = (action, itemId) => {
        if (action === "add")
            setQuantity(quantity + 1)
        else {
            if (quantity === 1) {

                cart.pop(itemId)
                dispatch(updateCart(cart))
            }
            else {
                setQuantity(quantity - 1)
            }
        }
    }
    return (
        <div className="cartItems">
            <div className="imgBox">
                <img src={imgSrc} alt="cart pic" />
            </div>
            <div className="itemSection">
                <h2 className="itemName">{name}</h2>
                <div className="itemQuantity">

                    <span>X{quantity}</span>
                    <div className="quantity">

                        <IoIosAddCircleOutline className='itemAdd' onClick={() => updateQuantity("add", itemId)} />
                        <CiCircleRemove className='itemRemove' onClick={() => updateQuantity("remove", itemId)} />

                    </div>
                </div>
            </div>
            <p className="itemPrice">
                <span className="dolorSign">$</span>
                <span className="itemPriceValue">{itemPrice}</span>
            </p>
        </div>
    )
}

export default CartItem
