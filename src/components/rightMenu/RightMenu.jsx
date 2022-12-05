import React from 'react'
import DebitCardContainer from './DebitCardContainer'
import "./rightMenu.css"
import SubMenuContainer from '../subMenuContainer/subMenuContainer'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
const RightMenu = ({ rightMenuActive }) => {
    const { cart } = useSelector(state => state.updateCart)
    console.log(cart)

    return (
        <div className={`rightMenuContainer ${rightMenuActive ? "active" : ""}`}>
            <div className="debitCardContainer">
                <div className="debitCard">
                    <DebitCardContainer />
                </div>

            </div>
            {
                !cart ? (<div></div>) : (

                    <div className="cartCheckOutContainer">

                        <SubMenuContainer name={"cart Items"} />
                        <div className="cartContainer">

                            {


                                cart && cart.map((list) =>

                                    <div key={list.id} >


                                        <CartItem itemId={list.id} name={list.name} imgSrc={list.imgSrc} price={list.price} />

                                    </div>
                                )
                            }
                        </div>
                        <div className="cartBottom">

                            <div className="totalSection">
                                <h3>Total</h3>
                                <p><span>$ 45.0</span></p>
                            </div>
                            <button className='checkOut'>Check Out</button>
                        </div>

                    </div>

                )
            }

        </div>
    )
}

export default RightMenu
