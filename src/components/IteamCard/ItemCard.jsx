import React, { useState } from 'react'
import { MdFavorite } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import { GrFormAdd } from "react-icons/gr"
import "./ItemCard.css"



const ItemCard = ({ imgSrc, name, rating, price }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    return (
        <div className='itemCard'>

            <div className="imgBox">
                <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink6.png?alt=media&token=86c4ba2c-0db7-47f0-b8cf-fed24db6c1ae
" alt="" />
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
                                <i key={i} className="rating">
                                    <AiFillStar />
                                </i>
                            ))
                        }

                    </div>
                    <h3 className='price'>
                        <span>${price}</span>
                    </h3>
                    <i className="addToCart">
                        <GrFormAdd />
                    </i>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
