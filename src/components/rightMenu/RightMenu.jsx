import React from 'react'
import DebitCardContainer from './DebitCardContainer'
import "./rightMenu.css"
import SubMenuContainer from '../subMenuContainer/subMenuContainer'
import CartItem from './CartItem'
const RightMenu = ({rightMenuActive}) => {
    return (
        <div className={`rightMenuContainer ${rightMenuActive?"active":""}`}>
            <div className="debitCardContainer">
                <div className="debitCard">
                    <DebitCardContainer />
                </div>

            </div>
            <div className="cartCheckOutContainer">

                <SubMenuContainer name={"cart Items"} />
                <div className="cartContainer">


                    <div>


                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                        <CartItem name={"Burger Bristo"} imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"} quantity={'4'} price={"7.95"} />
                    </div>
                </div>
                <div className="cartBottom">

                    <div className="totalSection">
                        <h3>Total</h3>
                        <p><span>$ 45.0</span></p>
                    </div>
                    <button className='checkOut'>Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default RightMenu
