import React from 'react'
import Banner from '../banner/Banner'
import BannerPic from "../../Assets/banner.jpg"
import "./mainContainer.css"
import DishContainer from "../../components/dishContainer/DishContainer"

const MainContainer = ({ name, discount, link }) => {
    return (
        <div >
            <div className="mainContainer">
                <div className="banner">
                    <Banner name="Rahul" discount="20" link='#' />
                    <div className="bannerImg">
                        <img src={BannerPic} alt="delivery pic" />
                    </div>

                </div>
                <DishContainer name={"Menu Category"} />
            </div>
            <div className="rightMenu">

            </div>
        </div>
    )
}

export default MainContainer
