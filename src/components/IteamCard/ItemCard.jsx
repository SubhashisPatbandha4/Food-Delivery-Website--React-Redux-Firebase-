import React, { useState, useEffect } from 'react'
import { MdFavorite } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import { GrFormAdd } from "react-icons/gr"
import { Items } from "../Data"
import "./ItemCard.css"

import { useDispatch, useSelector } from 'react-redux'
import { updateCart } from "../../actions"



const ItemCard = ({ imgSrc, name, rating, price, itemId }) => {
    const { cart } = useSelector(state => state.updateCart)

    const dispatch = useDispatch()


    const [userCart, setUserCart] = useState(null)
    useEffect(() => {
        if (userCart) {

            cart.push(userCart)
            dispatch(updateCart(cart))
        }
    }, [userCart]);

    const [ratingValue, setRatingValue] = useState(Math.floor(rating))
    const handleRating = (value) => {
        setRatingValue(value)
    }


    const [isFavourite, setIsFavourite] = useState(false);
    return (
        <div className='itemCard' id={itemId}>

            <div className="imgBox">
                <img src={imgSrc} alt="product" />
            </div>
            <div className="itemContent">
                <div className={`isFavourite ${isFavourite ? "active" : ""}`} onClick={() => setIsFavourite(!isFavourite)}>
                    <MdFavorite className='favIcon' />
                </div>
                <h3 className='itemName'>{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {
                            //making an array to use MAP ()
                            Array.apply(null, { length: 5 }).map((e, i) => (
                                <i key={i} className={`rating ${ratingValue > i ? "orange" : "grey"}`} onClick={() => handleRating(i + 1)}>
                                    <AiFillStar />
                                </i>
                            ))
                        }

                    </div>
                    <h3 className='price'>
                        <span>${price}</span>
                    </h3>
                    <i className="addToCart">
                        <GrFormAdd onClick={() => setUserCart(Items.find((i) => i.id === itemId))} />
                    </i>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
